const Url = {
  getActiveUrl() {
    const url = window.location.hash.toLowerCase();
    const splitUrl = this._urlSplitter(url);
    return splitUrl;
  },

  _urlSplitter(url) {
    const urlPieces = url.split('/');
    return {
      page: `/${urlPieces[1] || ''}`,
      id: urlPieces[2] || '',
      opt: urlPieces[3] || '',
    };
  },
};

export default Url;
