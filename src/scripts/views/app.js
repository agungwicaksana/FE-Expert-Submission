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
    const page = Route[url.page];
    this._mainContent.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
