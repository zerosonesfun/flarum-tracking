import TrackingPage from './components/TrackingPage';

app.initializers.add('zerosonesfun/flarum-tracking', () => {
  app.extensionData.for('zerosonesfun-tracking').registerPage(TrackingPage);
});