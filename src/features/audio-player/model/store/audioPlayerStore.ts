import { action, computed, makeObservable, observable, runInAction } from 'mobx';

import { formatTime } from '@/shared/lib/date/formatTime';
import { ISong } from '@/shared/types/types';

const DEFAULT_TIME = '0:00';

class AudioPlayerStore {
  songs: ISong[];

  selectedSong: ISong | null;

  isPlay: boolean | undefined;

  private audioTrack: HTMLAudioElement | null;

  currentTime: string;

  totalTime: string;

  progressBar: number;

  bufferBar: number;

  constructor() {
    makeObservable(this, {
      songs: observable,
      selectedSong: observable,
      isPlay: observable,
      currentTime: observable,
      totalTime: observable,
      progressBar: observable,
      bufferBar: observable,
      getSongs: computed,
      getSelectedSongs: computed,
      getIsPlay: computed,
      setSongs: action,
      setSelectedSong: action,
      setNextTrack: action,
      setPrevTrack: action,
      pauseTrack: action,
      playTrack: action,
      closePlayer: action,
      changeCurrentTime: action,
    });
    this.songs = [];
    this.selectedSong = null;
    this.isPlay = false;
    this.audioTrack = null;
    this.currentTime = DEFAULT_TIME;
    this.totalTime = DEFAULT_TIME;
    this.progressBar = 0;
    this.bufferBar = 0;
  }

  get getSongs() {
    return this.songs;
  }

  get getSelectedSongs() {
    return this.selectedSong;
  }

  get getIsPlay() {
    return this.isPlay;
  }

  private getSelectedIndex = () => this.songs.findIndex((item) => item._id === this.selectedSong?._id);

  private setCurrentTime = () => {
    if (this.audioTrack) {
      const { currentTime, duration } = this.audioTrack;
      runInAction(() => {
        this.currentTime = formatTime(currentTime);
        this.progressBar = Number.isNaN(duration) ? 0 : (currentTime / duration) * 100;
      });
    }
  };

  private setBufferBar = () => {
    if (this.audioTrack) {
      const { buffered, duration } = this.audioTrack;
      if (buffered.length > 0) {
        const loaded = buffered.end(buffered.length - 1);
        const percent = Math.ceil((loaded / duration) * 100);
        runInAction(() => {
          this.bufferBar = percent;
        });
      }
    }
  };

  private setTotalTime = () => {
    if (this.audioTrack) {
      const { duration } = this.audioTrack;
      const seconds = Number.isNaN(duration) ? 0 : duration;
      runInAction(() => {
        this.totalTime = formatTime(seconds);
      });
    }
  };

  private setAudioTrack = (song: ISong) => {
    if (this.audioTrack) {
      runInAction(() => {
        this.bufferBar = 0;
        this.currentTime = DEFAULT_TIME;
        this.totalTime = DEFAULT_TIME;
      });

      if (!this.audioTrack.paused) {
        this.pauseTrack();
      }
      this.audioTrack.src = song.songUrl;
    } else {
      this.audioTrack = new Audio(song.songUrl);
      this.audioTrack.preload = 'none';
      this.audioTrack.ontimeupdate = this.setCurrentTime;
      this.audioTrack.onloadeddata = this.setTotalTime;
      // this.audioTrack.oncanplay = this.audioTrack.play;
      this.audioTrack.addEventListener('progress', this.setBufferBar);
    }
    this.audioTrack.load();
    this.audioTrack.addEventListener('canplay', this.playTrack);
  };

  setSongs = (songs: ISong[]) => {
    this.songs = songs;
  };

  setSelectedSong = (song: ISong) => {
    if (this.selectedSong?._id === song._id) {
      if (!this.audioTrack?.paused) {
        this.pauseTrack();
      } else {
        this.playTrack();
      }
    } else {
      this.selectedSong = song;
      this.setAudioTrack(song);
    }
  };

  setNextTrack = () => {
    const findIndex = this.getSelectedIndex();
    if (findIndex === this.songs.length - 1) {
      [this.selectedSong] = this.songs;
    } else {
      this.selectedSong = this.songs[findIndex + 1];
    }
    this.setAudioTrack(this.selectedSong);
  };

  setPrevTrack = () => {
    const findIndex = this.getSelectedIndex();
    if (findIndex <= 0) {
      [this.selectedSong] = [...this.songs].reverse();
    } else {
      this.selectedSong = this.songs[findIndex - 1];
    }

    this.setAudioTrack(this.selectedSong);
  };

  closePlayer = () => {
    this.audioTrack?.pause();
    this.audioTrack = null;
    this.selectedSong = null;
  };

  pauseTrack = () => {
    if (this.audioTrack) {
      this.audioTrack.removeEventListener('canplay', this.playTrack);
      this.audioTrack?.pause();
      this.isPlay = false;
    }
  };

  playTrack = () => {
    if (this.audioTrack) {
      this.audioTrack.play();
      this.isPlay = true;
    }
  };

  changeCurrentTime = (value: number) => {
    if (this.audioTrack) {
      this.audioTrack.currentTime = (value * this.audioTrack.duration) / 100;
    }
  };
}

export default new AudioPlayerStore();
