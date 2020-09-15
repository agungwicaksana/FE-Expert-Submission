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
    const { id, page } = url;
    const Page = Route[page];
    this._mainContent.innerHTML = await Page.render(id);
    await Page.afterRender();
  }
}

export default App;
