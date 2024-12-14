Task 2

## Начальные требования

* Docker
* Docker-compose
* NodeJS 16+
* Pre commit (optional)

## Docker документация и установка

* <https://docs.docker.com/get-docker/>
* <https://dker.ru/docs/> (рус)

## Docker-compose документация и установка

<https://docs.docker.com/compose/install/>

## Pre-commit документация и установка

* Установить пакет локально, [следуя инструкциям](https://pre-commit.com/#installation)
* Выполнить команду `pre-commit install`
* После этого каждый коммит будет проверять правила линтинга и править ошибки

## Frontend установка

* Перейти в директорию

`cd src/frontend`

* Установить зависимости

`$ npm install`

В директории `src/frontend` возможно выполнить следующие скрипты:

```
npm run serve - запуск проекта (только клиент) в режиме разработки
npm run build - создание продакшн сборки проекта
npm run test:unit - запуск юнит тестов
npm run lint - запуск линтера
```

## Backend установка

* Перейти в директорию:

`cd src/backend`

* Установить зависимости:

`$ npm install`

## Docker установка проекта

* Выполнить команду:

`$ docker-compose build`

* Запустить проект с помощью команды:

`$ make start_project`

* Сервер будет запущен по адресу `localhost:3000`, а клиент по адресу `localhost:8080`

## Вход для авторизированного пользователя

Мы создали готового пользователя и разместили его в нашей базе данных. Для входа в систему используйте следующие данные:

```
email: user@example.com
password: user@example.com
```

Вы можете поменять данные пользователя в файле `src/backend/src/factory/users.json`

## Документация эндпоинтов сервера (OpenAPI)

Запустите проект и перейдите по адресу:

```
http://localhost:3000/explorer/
```

## Развертывание проекта на Windows 10 Home Edition (build 1909)

### Устанавливаем подсистему Windows для Linux (WSL) в Windows 10

Для установки требуется Windows 10 версии 1903 или более поздняя со сборкой 18362 или более поздней версии.

Устанавливаем WSL прямо по шагам, указанным [в этой статье](https://docs.microsoft.com/ru-ru/windows/wsl/install-win10#manual-installation-steps).

На шаге 6 «Установка дистрибутива Linux по выбору» для Windows 10 с русским языком в Microsoft Store нет ничего. Поэтому используем ссылки на страницы Microsoft Store ниже под картинкой: устанавливаем Ubuntu 18.04 LTS. Далее продолжаем установку по инструкции. В конце установки Ubuntu рекомендуется закрепить ярлык на начальном экране (при нажатии на «Пуск»).

Устанавливать Терминал Windows необязательно, так как удобнее использовать терминалы из VSCode.

### Настраиваем Ubuntu 18.04 LTS

Подключаем и обновляем репозиторий:

```
sudo add-apt-repository universe
sudo apt-get update
```

Устанавливаем Python 3 и его систему управления пакетами pip:

```
sudo apt install python3
python3 --version

sudo apt install -y python3-pip
pip3 --version
```

Устанавливаем make:

```
sudo apt install make
make --version
```

### Устанавливаем/обновляем NodeJS

Скачиваем и устанавливаем LTS версию 14.17.3 (включающую в себя npm 6.14.13) [отсюда](https://nodejs.org/dist/v14.17.3/node-v14.17.3-x64.msi).

Перезагружаем ОС.

### Устанавливаем Docker

Скачиваем и устанавливаем Docker Desktop on Windows.

Перезагружаем ОС.

Docker-compose уже включён в Docker Desktop on Windows. Поэтому дополнительно его устанавливать не нужно.

### Настраиваем Docker

В трее на значке Docker нажимаем правой кнопкой мыши и во всплывающем меню выбираем пункт Settings.

Переходим в Resources/WSL INTEGRATION и включаем на ней всё.

На Experimental Features оставляем параметр «Use Docker Compose V2» выключенным - будет использоваться стабильная версия 1.29

### Запускаем VS Code

При первом запуске VS Code после установки Docker будет предложено установить расширение Docker для VS Code.

Открываем проект Pizza (`Ctrl + K`, `Ctrl + O`).

### Устанавливаем Pre-commit

Смотрите [по этой ссылке](https://pre-commit.com/#installation).

В терминале VS Code открываем (добавляем) новую оболочку Ubuntu-18.04 (WSL).

Установить пакет локально:

```
sudo -H pip3 install pre-commit
```

Проверить установку можно командой:

```
pre-commit --version
```

Выполнить команду:

```
pre-commit install
```

Результат: `pre-commit installed at .git/hooks/pre-commit` - после этого каждый коммит будет проверять правила линтинга и править ошибки

### Установка Frontend

В терминале VS Code переключаемся на оболочку PowerShell.

* Перейти в директорию `cd src/frontend`
* Установить зависимости `npm install`

### Установка Backend

В терминале VS Code в оболочке PowerShell:

* Вернуться в корневой каталог проекта `cd ../..`
* Перейти в директорию `cd src/backend`
* Установить зависимости `npm install`
* Вернуться в корневой каталог проекта `cd ../..`

### Docker установка проекта

В терминале VS Code в оболочке PowerShell:

* Выполнить команду `docker-compose build`

В терминале VS Code переключаемся на оболочку Ubuntu-18.04 (WSL):

* Запустить проект с помощью команды `make start_project`
* Для остановки нажать `Ctrl + C`

### Запуск и просмотр готовой вёрстки проекта

В терминале VS Code переключаемся на оболочку PowerShell:

* Находясь в корневом каталоге проекта, перейдите в директорию template: `cd template`
* Установите зависимости, выполнив команду `npm install`
* Запустите проект командой `npm start`


---

<a href="https://htmlacademy.ru/intensive/vue"><img width="50" height="50" title="HTML Academy" src="https://up.htmlacademy.ru/static/img/intensive/javascript/logo-for-github-2.png"></a>

Репозиторий создан для обучения на профессиональном онлайн‑курсе «[Vue.js для опытных разработчиков](https://htmlacademy.ru/intensive/vue)» от [HTML Academy](https://htmlacademy.ru).
