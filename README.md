Welcome to the Enspire Commerce UI Code Challenge
===============

## OVERVIEW

The purpose of this code challenge is to test your experience and knowledge in AngularJS and expose you to a small portion of the type of work we do. This challenge focuses on `directives` and is very similar to the the daily tasks you will be required to complete.

We have simplified this challenge by scaffolding out all the `directives`, `services` and `controllers` needed to complete this task. We also provided the needed CSS.

The directions below are under the assumption you have used `node` and `grunt` in your past development environments.

### 1. Getting Started

Install all dependencies.

    npm install

### 2. Building/Testing project

To build your component and test.

    grunt


## THE CHALLENGE

You will be required to complete the TABS component, which is located in the `src/components/tabs/` folder. Every file already has everything that it needs to work, with exception to the following marked areas. Feel free though to modify or change the code outside this area.

```js
    /**
     *
     * YOUR CODE GOES HERE
     *
     * */
```

### Requirements

Refer to `index.html` to see structure of how tabs are used.

#### Tabs (directive)
\<en-tabs data-container="containerName"\>  - `tabsDirective.js`

- The `container` attribute refers to the name of the \<en-tab-container\>
- This directive needs a controller `tabsController.js`

#### Tab (directive)
\<en-tab data-pane="paneName"\>  - `tab/tabDirective.js`

- The `pane` attribute refers to the name of the \<en-tab-pane\>

#### Tab Container (directive)
\<en-tab-container data-name="containerName"\>  - `tabContainer/tabContainerDirective.js`

- The `name` attribute sets the name of the tab container
- This directive needs a controller `tabContainer/tabContainerController.js`

#### Tab Pane (directive)
\<en-tab-pane data-name="paneName"\>  - `tabPane/tabPaneDirective.js`

- The `name` attribute sets the name of the tab pane

#### Tabs Service (service)
$enTabs - `tabsService.js`

- This holds all active `tab containers` and their active tabs
- This also allows selecting tabs from anywhere within the code base.

## NO - NOs

- No 'JQuery'. Angulars built in JQlite is acceptable.
- NO touching the `DOM` in `controllers` or `services`, it can only be touched within `directives`.
- Avoid `isolated` scopes for this challenge.
- Avoid `templates` for this challenge.
- Avoid `transclude`  for this challenge.
