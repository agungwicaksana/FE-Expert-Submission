import './components/drawer';
import './components/footer';
import Url from '../routes/url';
import Route from '../routes/route';

class App {
  constructor(mainContent) {
    this._mainContent = mainContent;
  }

  async renderPage() {
    const url = Url.getActiveUrl();
    const Page = Route[url.page];
    this._mainContent.innerHTML = await Page.render(url);
    await Page.afterRender();
  }
}

export default App;
