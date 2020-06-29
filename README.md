# food-point-snack
Food Point for Snack - React Native App

------------------

[DEMO at Snack.expo.io](https://snack.expo.io/@webdevelop/food-points---oslo-(norway))


[DEMO at Appetize.io](https://appetize.io/app/k4phnu6fhufd1fmtev5p19wc8c?device=nexus5&scale=75&orientation=portrait&osVersion=8.1)

------------------

Tap to play & select:

1) iOS

2) Android

3) Download the [Expo Client](https://expo.io/client) and scan the QR code to get started.

------------------

## Run the App & clear cache:
```
npm run start -c

npm run dev -c

yarn dev

```


[http://localhost:19002/](http://localhost:19002/)

--------------------

### fix errors:

``` 
rm -r node_modules

rm package-lock.json

expo upgrade

yarn dev
```

--------------------


### create packages with expo-cli


``` 
expo build:android -t apk
expo build:android -t app-bundle
```

``` 
expo build:ios -t archive
expo build:ios -t simulator
```

``` 
expo build:status

...
