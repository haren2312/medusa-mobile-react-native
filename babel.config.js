module.exports = {
  presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
  plugins: [
    'react-native-reanimated/plugin',
    'module:react-native-dotenv',
    [
      'module-resolver',
      {
        root: ['./app'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@styles': './app/styles',
          '@images': './app/images',
          '@screens': './app/screens',
          '@components': './app/components',
          '@api': './app/api',
        },
      },
    ],
  ],
};
