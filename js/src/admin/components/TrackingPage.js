import ExtensionPage from 'flarum/components/ExtensionPage';

export default class TrackingPage extends ExtensionPage {
  oninit(vnode) {
    super.oninit(vnode);
    this.saving = false;
    this.refresh();
  }
  refresh() {
    this.loading = true;
  }
  content() {
      return (
        <div style="--aspect-ratio: 16/9;">
            <iframe 
                    src="../assets/extensions/zerosonesfun-tracking/bumpy/index.php"
                    width="1600"
                    height="900"
                    frameborder="0">
            </iframe>
        </div>
       );
    }
}
