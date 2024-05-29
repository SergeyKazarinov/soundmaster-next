import { action, computed, makeObservable, observable } from 'mobx';

import { ISong } from '@/shared/types/types';

class AudioPlayerStore {
  songs: ISong[];

  selectedSong: ISong | null;

  constructor() {
    makeObservable(this, {
      songs: observable,
      selectedSong: observable,
      getSongs: computed,
      setSongs: action,
      setSelectedSong: action,
      setNextTrack: action,
      setPrevTrack: action,
    });
    this.songs = [];
    this.selectedSong = null;
  }

  get getSongs() {
    return this.songs;
  }

  getSelectedIndex = () => this.songs.findIndex((item) => item._id === this.selectedSong?._id);

  setSongs = (songs: ISong[]) => {
    this.songs = songs;
  };

  setSelectedSong = (song: ISong) => {
    this.selectedSong = song;
  };

  setNextTrack = () => {
    const findIndex = this.getSelectedIndex();
    console.log(findIndex);
    if (findIndex === this.songs.length - 1) {
      [this.selectedSong] = this.songs;
    } else {
      this.selectedSong = this.songs[findIndex + 1];
    }
  };

  setPrevTrack = () => {
    const findIndex = this.getSelectedIndex();
    console.log(findIndex);
    if (findIndex <= 0) {
      [this.selectedSong] = [...this.songs].reverse();
    } else {
      this.selectedSong = this.songs[findIndex - 1];
    }
  };
}

export default new AudioPlayerStore();
