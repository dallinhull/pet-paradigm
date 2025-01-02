# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

```
pet-app
├─ .git
│  ├─ .COMMIT_EDITMSG.swn
│  ├─ .COMMIT_EDITMSG.swo
│  ├─ .COMMIT_EDITMSG.swp
│  ├─ .MERGE_MSG.swp
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ objects
│  │  ├─ 00
│  │  │  ├─ 6abca811dc883bdd6b39e7df3c2b126362e46f
│  │  │  └─ 7994054ff1496ee7149fb3079c2e8c11f472cf
│  │  ├─ 04
│  │  │  └─ e6cff444f610284e9cdc561098f772cfba2123
│  │  ├─ 07
│  │  │  └─ 67d9f56f0c4a070f291d52569933562f3b9936
│  │  ├─ 09
│  │  │  └─ 2408a9f09eae19150818b4f0db5d1b70744828
│  │  ├─ 0c
│  │  │  └─ 60030f441091092a9632646c942c7a5c3c3293
│  │  ├─ 0d
│  │  │  └─ 17da88c321940b6b997e68348f347974042bed
│  │  ├─ 0e
│  │  │  └─ e86894743e7563a81620ab616d2728df863145
│  │  ├─ 10
│  │  │  ├─ 01c0775e1bc10a04284395eaadda60b490abcb
│  │  │  ├─ 0de54f5a2c2c5d32fe38cd57c8ecc706e174ba
│  │  │  └─ dd98d03e08f107abd2db9557e54161afa17532
│  │  ├─ 11
│  │  │  └─ f02fe2a0061d6e6e1f271b21da95423b448b32
│  │  ├─ 12
│  │  │  └─ 2e6093c5242b8bbffb0a5819de237d2f81b8c9
│  │  ├─ 13
│  │  │  └─ 0cbee19cb28eecd6dc46ab957c4b18c79f451a
│  │  ├─ 14
│  │  │  └─ 6791fd6fc9d8e2bcbac716111b98b9a4e40f7e
│  │  ├─ 15
│  │  │  └─ 67445a6926ac0f49d669436a985043d21b4591
│  │  ├─ 18
│  │  │  ├─ 1930dbc5a3edfe6bd5eab85ec7fef0694844fd
│  │  │  └─ f8bdbc74966c46940378c774dd09c687a3930a
│  │  ├─ 1a
│  │  │  └─ d8991803f6fede50b31bb7047660c407a3bd67
│  │  ├─ 1b
│  │  │  └─ b89604235b34c615fb20884bd855ac81127d26
│  │  ├─ 1c
│  │  │  ├─ 1461041082b414d2e41a11b1f9c3ab3938abf2
│  │  │  └─ 8713ce40b1630ab406c7b1ee524eabd1a3f758
│  │  ├─ 1f
│  │  │  └─ fef600d959ec9e396d5a260bd3f5b927b2cef8
│  │  ├─ 20
│  │  │  └─ ae5e0ab5e4835af953d28553a173757f4897d0
│  │  ├─ 21
│  │  │  ├─ 92aee194386ea7cb46fb0d915eb314c55a1eaf
│  │  │  └─ a21231078c0de76228da504a01966dd4fdd618
│  │  ├─ 24
│  │  │  └─ 6e396f9da87946e1cf56406bcb6b22d9b58f2c
│  │  ├─ 28
│  │  │  ├─ 05c1da6fc580e5bc4f210d8bf3a9da53a90c15
│  │  │  └─ ee3ab236fea08ecef2e151986d2d907869f87d
│  │  ├─ 29
│  │  │  └─ 99053c6463efe509456e8da993cf1d785973ce
│  │  ├─ 2c
│  │  │  └─ d1aad0d9e7ed891920ace6f61eeef71fb340b8
│  │  ├─ 32
│  │  │  ├─ 40098d8d29a7a0422456497fcd40764c840b0b
│  │  │  └─ f6fa160bff1fc5d99cd2681e316472e78b6fda
│  │  ├─ 33
│  │  │  ├─ 1dd225f7aa484784d56844646696940919a2f0
│  │  │  └─ 8a8a2cfc9751a34506bcec251ed20c6e4423b9
│  │  ├─ 35
│  │  │  └─ 8ca9ba93f089b0133f05933f133a446402eb17
│  │  ├─ 37
│  │  │  └─ d3c16250ed7d6e36ee722f204da031f084e6b3
│  │  ├─ 38
│  │  │  ├─ 43306f627734c04caf9676ddedb049b5c2960f
│  │  │  ├─ 978a7372392678a9a71625cd60cc3f7f7db566
│  │  │  └─ b21779c65cbe0c70e7b78851edcc39392fbb34
│  │  ├─ 39
│  │  │  └─ 3e16a377d86c2dd86e7c3142e421ce3f7054d9
│  │  ├─ 3a
│  │  │  └─ 47e88590cc160d97815427cea07b742bc75cf6
│  │  ├─ 3b
│  │  │  ├─ 0b78403179004a179736100705e4b0bd20b83d
│  │  │  ├─ 49d44c12b3a0413d065839752a46210c4929ec
│  │  │  └─ edbadbdff396b359d605b934af4e011a66681b
│  │  ├─ 3c
│  │  │  └─ 38ce5be3c928d200d6693055546b0170849510
│  │  ├─ 3d
│  │  │  └─ 206536e208e5c931d0ba8909977685b5b1901a
│  │  ├─ 41
│  │  │  └─ 06cfe17f268ddfb789f959f0e75c51485b2154
│  │  ├─ 42
│  │  │  ├─ 975c8b30f1f77a3e58e8dc7783f03f55fd2a4d
│  │  │  └─ b4912fa4ee575845aee12af015a7ecb37f6c28
│  │  ├─ 44
│  │  │  ├─ 3453e30196e5038e333705b77fccd33e166612
│  │  │  ├─ 7983b6bcab0f9d1a1b528e59d67124d6085c93
│  │  │  └─ eefa1c05fa7d3964c4e2c3f2ae86ae978530a7
│  │  ├─ 45
│  │  │  ├─ 714eef9503fddf68f4c2df63e7a9ca34c552c0
│  │  │  └─ 9f1ad359572ec0e5aad14b514e22e29c3a9168
│  │  ├─ 46
│  │  │  ├─ 68daee220a1a1cb166735e686e297aa2995166
│  │  │  └─ 6c0e6e7979e96657d0ac5a7f55abe93369d61b
│  │  ├─ 47
│  │  │  └─ ae21facacd05c2e408395d4eaaf335d0281788
│  │  ├─ 49
│  │  │  └─ 23e1711a5c131523b8ccb794baf327fe9fc009
│  │  ├─ 4b
│  │  │  ├─ 139bf5242dfc2f3bfc469cbab18e99488b0cb2
│  │  │  └─ 825dc642cb6eb9a060e54bf8d69288fbee4904
│  │  ├─ 4d
│  │  │  └─ b6a626dec4b7e7cfc72f862ba6ebc40eb3316b
│  │  ├─ 4f
│  │  │  └─ b237e44d768b584abf4fca4570537fdf7afe29
│  │  ├─ 50
│  │  │  └─ eb74a0144d67c450015aa043c291cd564b0ff8
│  │  ├─ 51
│  │  │  └─ 058a589815cc77c0cd93496dc5932a8c8cbb4d
│  │  ├─ 54
│  │  │  └─ 644c282dc37896fb12af1581b4bfadce0335a6
│  │  ├─ 55
│  │  │  ├─ 23007e9bc13e53b0e7d2e1673128bd5133c623
│  │  │  └─ 7b37c44d5cb352ff331f90e7fba0189cdfa65e
│  │  ├─ 56
│  │  │  └─ 3cadcacabf0f7cc91791a623cab2911ab94c0f
│  │  ├─ 58
│  │  │  └─ ab05158d3eca942e3d74b3d787cad622719a57
│  │  ├─ 59
│  │  │  └─ 400d6d1e70b4ec2be4f1ae7b7510b18e9aa399
│  │  ├─ 5a
│  │  │  ├─ 3267723f20beb376a09df4c52a62b9435f43a2
│  │  │  └─ e0b4cc165b2c1843c90f13c32e89d79c0f021e
│  │  ├─ 5b
│  │  │  ├─ 4432d5160ad0d372300347d54fc978fdb13ab8
│  │  │  └─ d8e4f35fddcb35b11bd9a6ae86a848d7322a74
│  │  ├─ 5e
│  │  │  └─ 777495a15144acc28d738df47e715195e496df
│  │  ├─ 61
│  │  │  └─ 65ea88ff1334f7474a92e61a6c9a461a2c24c2
│  │  ├─ 62
│  │  │  └─ bdb84b5e2070b73cdf21ca8ec368e7211d667f
│  │  ├─ 63
│  │  │  └─ bd55333dc35ffdef863317a5838a073b01db6e
│  │  ├─ 65
│  │  │  ├─ 26ae27c2eb6847685daae004f04d6de2d676d7
│  │  │  └─ e91c996736a349a95c456784ea32c1fc1ef7e2
│  │  ├─ 68
│  │  │  ├─ 3d20e4ffb9dfe1df482a980236965e61664da1
│  │  │  └─ e27da5872c060a180fd802ee4abdcb281ec11a
│  │  ├─ 69
│  │  │  └─ b013b9bf2d0adc97727a0a25763ccd385ac0aa
│  │  ├─ 6a
│  │  │  └─ 1c8dc13355ee5e30534b722c14a10c7ce1e514
│  │  ├─ 6c
│  │  │  └─ 87de9bb3358469122cc991d5cf578927246184
│  │  ├─ 6d
│  │  │  └─ 0f2e2431b527c0916047cb8a1fff6dec99931f
│  │  ├─ 70
│  │  │  └─ 4767450f90bf9d63bd2169c664e8ccf651b8d7
│  │  ├─ 71
│  │  │  ├─ 9ef18e674e311d3d11bbe85b4037937d1d43d8
│  │  │  └─ bdb248cf9d935af02abe997e1cb7605db797a3
│  │  ├─ 74
│  │  │  └─ 872fd4af60fb8d6cdb7d27e6c587ee0b6e1df7
│  │  ├─ 75
│  │  │  ├─ 4e718ff578cce4adcbb88883efe3a288423c77
│  │  │  └─ df225396550c237856d64105650e9098b10add
│  │  ├─ 78
│  │  │  └─ ba378a03707f9390456d56d2a18dae2420c08b
│  │  ├─ 7d
│  │  │  ├─ 216664a21ccb3502422941c5dd70115bcce863
│  │  │  ├─ 232c3001b39473295cf359d12553bae3b3b295
│  │  │  └─ 766ad649c70118cf4dcd916830f88a4a5d5dd9
│  │  ├─ 7f
│  │  │  ├─ 4a98d3d332d5d9f34b5e2e3c873195409b6e83
│  │  │  └─ 52eec0c2447899039c9a86ca2b07e2c5c247d0
│  │  ├─ 80
│  │  │  └─ c70baac4dd7f61c53403ab592a7bb84c816b4c
│  │  ├─ 82
│  │  │  └─ b0ddbbf36ce5bad5781e2be89c0183897fbeed
│  │  ├─ 83
│  │  │  ├─ 00acf97aa1466566ccf13301c81ac77a5d01b7
│  │  │  └─ 30fb17c7e14b76e7b3a187deea19b8fc3a9c01
│  │  ├─ 85
│  │  │  ├─ a053d42d322813a8d66ad2c4d550e9d462e638
│  │  │  └─ c58fcc01f1a6ad20da8e0fc4baefcccc31fa86
│  │  ├─ 87
│  │  │  └─ 4bf9b786aaeb7cd36282c437fa8aca7e19bad8
│  │  ├─ 88
│  │  │  └─ b9dec4ea724037df601f09a63c6dff472e2773
│  │  ├─ 8a
│  │  │  └─ c935686b020ce9673580bd915dc61b9936b51d
│  │  ├─ 8b
│  │  │  └─ 0f57b91aeb45c54467e29f983a0893dc83c4d9
│  │  ├─ 8d
│  │  │  └─ d1181f1aa53dc378378e34892980fb6280b8d5
│  │  ├─ 90
│  │  │  └─ feb9a0ffb3dc4b5e2c46c7a75a0c6641c8e078
│  │  ├─ 98
│  │  │  ├─ 874a8ef638f3e023f50315629c5d774dded26b
│  │  │  └─ 944a6d72f15de397a08ad40f64f619c88d99ea
│  │  ├─ 99
│  │  │  ├─ 0026e952a770f5fdf11543663ce0181bd97738
│  │  │  └─ 662d6d6bf889483ec686cbb761fddc2cd1c51d
│  │  ├─ 9b
│  │  │  └─ 7f1261be5a8309c89c59d76e155884f8ff846b
│  │  ├─ 9f
│  │  │  └─ f2d0ebb5ea16fb90fe96b5e204fd9276ae729a
│  │  ├─ a1
│  │  │  └─ 81020693b02ed9bc967da306f586ce5231c552
│  │  ├─ a3
│  │  │  └─ 43ea9b4f73c55e663baa3c2af36a376e248a5f
│  │  ├─ a5
│  │  │  └─ 47bf36d8d11a4f89c59c144f24795749086dd1
│  │  ├─ a7
│  │  │  └─ ba2354a24c4ebad24288848b3f03c87765fa60
│  │  ├─ a8
│  │  │  ├─ 98a5bd5115ad80ccb77bbef4dc293040ac1769
│  │  │  └─ b947e3e70804639716eb7f524deccf36bc410c
│  │  ├─ aa
│  │  │  ├─ 6258aa0f0b1ae7b0c16dc1c05ec74c0335dd81
│  │  │  ├─ 6fc043a3fc369c37dace514f2479ffb6704b88
│  │  │  └─ 77c8b03e34b74a5e156b08b53b28bc1a6f62fa
│  │  ├─ ac
│  │  │  └─ f09af3971d0ccb7777805a5ffbf76edccac080
│  │  ├─ ae
│  │  │  └─ bd064a66d0c6379094a8f55ab471cb2e0bb7c5
│  │  ├─ af
│  │  │  ├─ 92ea5fb3d08779e27e30fc8bb095e91da26bb3
│  │  │  └─ ea35923fe91e11baa7f52f575291b321c99b12
│  │  ├─ b0
│  │  │  └─ cd8ece80d26f7cd73d701f5f7df7712d40b7d5
│  │  ├─ b4
│  │  │  └─ 13f4d12e1cafa452d04225b520b1e4dcdb536f
│  │  ├─ b7
│  │  │  └─ c4cceb16d11cbcff1054d74aa195f6b5b7ec1f
│  │  ├─ b8
│  │  │  └─ 9fd6a40768640b845d3c26e5b34fef2ccfb53c
│  │  ├─ ba
│  │  │  └─ 76fc9e28c95b28c05309a07da01dc24de25aea
│  │  ├─ bb
│  │  │  ├─ 807a0910ae897e0fdac4c1cd8ff517ca78a7ef
│  │  │  └─ 92c8304828c13c20699432b260ce74ce09b0e3
│  │  ├─ bc
│  │  │  └─ 18947d58e40caec7b75f48e9514846027d99ac
│  │  ├─ be
│  │  │  ├─ 0377d4ef803d8ccea801801f72beeb4c06a0b8
│  │  │  └─ f5202a32cbd0632c43de40f6e908532903fd42
│  │  ├─ c5
│  │  │  └─ e55146a250d6d69095a268b9997116c60f4e42
│  │  ├─ c7
│  │  │  ├─ 07bd09d6bca2d1e2102d58e4f548ee9afcfc06
│  │  │  └─ 98e280b2795bd5f35405a73162139060daef5b
│  │  ├─ c8
│  │  │  └─ 9d1c863c8b59e3e99dc0b40879c83a9ed0227b
│  │  ├─ c9
│  │  │  ├─ 269bf2850303bc706d9ed84826cff7073cbf70
│  │  │  └─ 9324a6d33f71908f137312925d9881e59390f2
│  │  ├─ ca
│  │  │  └─ 4bc48ff2352c669794a3bd2f19de0ffe3a8d5f
│  │  ├─ cd
│  │  │  └─ 63e96e2cc88017ee112375be570b72d34275b1
│  │  ├─ cf
│  │  │  └─ 086825482e20aa583e95c99ff1fa37245921bc
│  │  ├─ d1
│  │  │  └─ 02c3ac897b252fc7726bab516ab1a1f6d78325
│  │  ├─ d2
│  │  │  └─ 58e1b74373ce414bcd4289a695268bb9436b58
│  │  ├─ d3
│  │  │  └─ c470c68634816b359d8893255c5b439a48035a
│  │  ├─ d4
│  │  │  ├─ 01542f9b8a8f81dac12c2d41c0e679bc417d18
│  │  │  └─ dcf0f0ccf32beca81525f77b93fac143b257da
│  │  ├─ d6
│  │  │  └─ 9ebc9afe25e0d493f85c21b45a0f5bbfc9f2b1
│  │  ├─ d8
│  │  │  └─ 9552c15b43f0f8cfaafda6db87a8893734392a
│  │  ├─ d9
│  │  │  └─ c2e392ef80e0fa1d939ff546599c8fdc02e3e5
│  │  ├─ db
│  │  │  └─ 0becc8b033a4a78144f4a3bb852082fe91cd62
│  │  ├─ dc
│  │  │  └─ f18d0429905f02149fdd9b86f47d0b960426c4
│  │  ├─ dd
│  │  │  └─ e8896684631e15ea48ecd8979b7b238836de82
│  │  ├─ de
│  │  │  ├─ 82aa9183fb6e8e2dd70f8e83c9c793171e1dd5
│  │  │  └─ ac03f1ef5f863b0d7042765c251857feda4f13
│  │  ├─ df
│  │  │  └─ 7e1e30c0d06d3bb0337560c104933d13c917e5
│  │  ├─ e0
│  │  │  └─ dd2ed0ced094d4cdc437f418e7182d62e421b6
│  │  ├─ e2
│  │  │  └─ c3b09afce312d647608c6a6acb77b4667adfb7
│  │  ├─ e3
│  │  │  └─ ad3079ddd75d64374d614c6cb5a54f25a8d183
│  │  ├─ e4
│  │  │  └─ b78eae12304a075fa19675c4047061d6ab920d
│  │  ├─ e5
│  │  │  └─ 298f41167e5e0cce8e6b606a357c14033ab39e
│  │  ├─ e6
│  │  │  ├─ 9de29bb2d1d6434b8b29ae775ad8c2e48c5391
│  │  │  └─ a78c1a6fa59ceece87b44ae9859395e1b416bc
│  │  ├─ e7
│  │  │  ├─ 1498b85df2ab7092d0dde11a5d85072600aea8
│  │  │  └─ b8dfb1b2a60bd50538bec9f876511b9cac21e3
│  │  ├─ e8
│  │  │  ├─ 6cd8994ed52aa52c77878e737193313babd18f
│  │  │  └─ 876114d117a27312ecb5d9ad46e3bf6fdf34e1
│  │  ├─ e9
│  │  │  ├─ a97b8354daca8a1b802492e5c0c496c1b4d3b1
│  │  │  └─ d24f5363684999087d0137397c0b41ebd0c0f9
│  │  ├─ ea
│  │  │  └─ 9da1b767bfc99a034d6163c5c6c042d6aba034
│  │  ├─ eb
│  │  │  └─ 487c618f817af109b1f8fbc27b841cabde7a0a
│  │  ├─ ee
│  │  │  └─ fe057109320dd4f4492a8280dde49f22161981
│  │  ├─ ef
│  │  │  └─ ac0342a5a968134ff7d7350950283751325282
│  │  ├─ f0
│  │  │  └─ a2c72197ffd24ff323c11477771d31b1202169
│  │  ├─ f2
│  │  │  └─ 4117cebec0d29a7cf4066794a7cd3261a5326a
│  │  ├─ f4
│  │  │  └─ b08444309e4990ccac28768a738fb4db8b44b7
│  │  ├─ f6
│  │  │  ├─ 04775e48e3e80aabd3d411e29db4657ea4266b
│  │  │  └─ 5f6d43f619f290ceb3e6399f132543d8f56518
│  │  ├─ f7
│  │  │  ├─ 77a9866c2a10b5e9fa625da4488026cffd09f5
│  │  │  └─ f64bb324a7fea44b88f6851173092afd1293ce
│  │  ├─ fa
│  │  │  └─ 8609b85f3d16f792f328962e323e1cb498a68e
│  │  ├─ fb
│  │  │  ├─ 79c218114eba94015d79f1343388fb4361a153
│  │  │  └─ eee43fd974baa2145276c8eca24bec1dbe64aa
│  │  ├─ info
│  │  └─ pack
│  ├─ ORIG_HEAD
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  ├─ origin
│     │  │  ├─ gh-pages
│     │  │  └─ main
│     │  └─ pet-app
│     │     └─ master
│     └─ tags
├─ .gitignore
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  └─ vite.svg
├─ README.md
├─ src
│  ├─ App.css
│  ├─ App.tsx
│  ├─ assets
│  │  ├─ ASPCA.png
│  │  ├─ balloon-dog.png
│  │  ├─ best-friends.png
│  │  ├─ bird-banner.jpg
│  │  ├─ bird-logo.jpg
│  │  ├─ bird-relationship.jpg
│  │  ├─ cat-banner.jpg
│  │  ├─ cat-kitten.jpg
│  │  ├─ cat-old.jpg
│  │  ├─ cat-one.jpg
│  │  ├─ cat-seven.jpg
│  │  ├─ dog-bath.jpg
│  │  ├─ dog-field.jpg
│  │  ├─ dog-hiking.jpg
│  │  ├─ dog-medical.jpg
│  │  ├─ dog-woods.jpg
│  │  ├─ dog_owner_beach.jpg
│  │  ├─ fish-shelter.jpeg
│  │  ├─ lifestyle_cat.jpg
│  │  ├─ paradigm-logo.png
│  │  ├─ pexpert-professional.jpg
│  │  ├─ react.svg
│  │  ├─ Sitemap.png
│  │  ├─ snakes-logo.jpg
│  │  ├─ vet.jpg
│  │  └─ Wireframe.png
│  ├─ components
│  │  ├─ adopt.tsx
│  │  ├─ bird_banner.tsx
│  │  ├─ bird_intro.tsx
│  │  ├─ bird_relationship.tsx
│  │  ├─ cat_banner.tsx
│  │  ├─ cat_intro.tsx
│  │  ├─ cat_kitten.tsx
│  │  ├─ cat_old.tsx
│  │  ├─ cat_one.tsx
│  │  ├─ cat_seven.tsx
│  │  ├─ dog_banner.tsx
│  │  ├─ dog_diet.tsx
│  │  ├─ dog_groom.tsx
│  │  ├─ dog_intro.tsx
│  │  ├─ dog_medical.tsx
│  │  ├─ footer.tsx
│  │  ├─ head.tsx
│  │  ├─ health.tsx
│  │  ├─ logos.tsx
│  │  ├─ mission.tsx
│  │  ├─ navbar.tsx
│  │  ├─ pet_banner.tsx
│  │  ├─ pexpert.tsx
│  │  ├─ pexpert_banner.tsx
│  │  └─ pexpert_form.tsx
│  ├─ css
│  │  ├─ adopt.css
│  │  ├─ birdBanner.css
│  │  ├─ birdIntro.css
│  │  ├─ birdRelationship.css
│  │  ├─ catBanner.css
│  │  ├─ catIntro.css
│  │  ├─ catKitten.css
│  │  ├─ catOld.css
│  │  ├─ catOne.css
│  │  ├─ catSeven.css
│  │  ├─ dogBanner.css
│  │  ├─ dogDiet.css
│  │  ├─ dogGroom.css
│  │  ├─ dogIntro.css
│  │  ├─ dogMedical.css
│  │  ├─ footer.css
│  │  ├─ health.css
│  │  ├─ mission.css
│  │  ├─ navbar.css
│  │  ├─ PetBanner.css
│  │  ├─ pexpert.css
│  │  ├─ pexpertBanner.css
│  │  ├─ pexpertForm.css
│  │  └─ placeholder.css
│  ├─ index.css
│  ├─ main.tsx
│  ├─ pages
│  │  ├─ birds.tsx
│  │  ├─ cats.tsx
│  │  ├─ dogs.tsx
│  │  ├─ home.tsx
│  │  └─ pexpert.tsx
│  └─ vite-env.d.ts
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```