Welcome to the Enspire Commerce UI Code Challenge
===============

## OVERVIEW

This code challenge is to test your experience and knowledge with AngularJS and to expose you to a small portion of the type of work we do. This challenge focuses on `directives` and is similar to the daily tasks you will be required to complete.

We have simplified this challenge by scaffolding out the `directives`, `services` and `controllers`, as well as the needed CSS, you will need to complete this task.

The directions below assume you are familiar with, and have used, `node`, `grunt` and `bower` in your past development environments.

### 1. Getting Started

```bash

# First install all the NPM dependencies:
npm install

# Second install all the bower dependencies:
bower install

```

### 2. Building/Testing project

```bash

# Build your component and test:
grunt

```

## THE CHALLENGE

You will be required to complete the **TABS** component, located in `src/components/tabs/`. With the exception of the following *marked areas*, every file has what it needs to work. *You are allowed to modify any code outside of these areas*.

```js
    /**
     *
     * YOUR CODE GOES HERE
     *
     * */
```

### Requirements

Refer to `index.html` for tabs usage examples.

```html
    <en-tabs data-container="myContainName">
        <en-tab data-pane="myPaneName1" data-selected="true">Tab #1</en-tab>
        <en-tab data-pane="myPaneName2">Tab #2</en-tab>
        <en-tab data-pane="myPaneName3">Tab #3</en-tab>
    </en-tabs>

    <en-tab-container data-name="myContainName">
        <en-tab-pane data-name="myPaneName1">
            Panes Content #1
        </en-tab-pane>
        <en-tab-pane data-name="myPaneName2">
            Panes Content #2
        </en-tab-pane>
        <en-tab-pane data-name="myPaneName3">
            Panes Content #3
        </en-tab-pane>
    </en-tab-container>
```




#### Tabs (directive)
\<en-tabs data-container="containerName"\>  - `tabsDirective.js`

- The `container` attribute refers to the name of the \<en-tab-container\>
- This directive needs a controller `tabsController.js`

#### Tab (directive)
\<en-tab data-pane="paneName"\>  - `tab/tabDirective.js`

- The `pane` attribute refers to the name of the \<en-tab-pane\>
- The `selected` attribute, when 'true', makes the tab initially active

When a tab is `active` you should set a class name of `active` on the element.

#### Tab Container (directive)
\<en-tab-container data-name="containerName"\>  - `tabContainer/tabContainerDirective.js`

- The `name` attribute sets the name of the tab container
- This directive needs a controller `tabContainer/tabContainerController.js`

#### Tab Pane (directive)
\<en-tab-pane data-name="paneName"\>  - `tabPane/tabPaneDirective.js`

- The `name` attribute sets the name of the tab pane

When a pane is `active` you should set a class name of `active` on the element.

#### Tabs Service (service)
$enTabs - `tabsService.js`

- This holds all active `tab containers` and their active tabs
- This also allows selecting tabs from anywhere within the code base.

## FINAL RESULTS
Zip your code and email it to your contact at Enspire Commerce.

![Final Results](https://raw.github.com/jasonfutch/enspire-ui-code-challenge/master/final-results.gif)


## HINTS
We like to use $timeout instead of $apply to trigger a digestion.

## NO - NOs

- No 'JQuery'. Angulars built in JQlite is acceptable.
- No touching the `DOM` in `controllers` or `services`, it can only be touched within `directives`. EXCEPTION: You may use the addClass & removeClass methods with a 'controller', if needed.
- Avoid `isolated` scopes for this challenge.
- Avoid `templates` for this challenge.
- Avoid `transclude`  for this challenge.