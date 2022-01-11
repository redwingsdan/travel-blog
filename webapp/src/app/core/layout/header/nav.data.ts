/**
 * A data object containing all the navigation data that is used to build both the main (desktop) nav bar and the mobile menu.
 * Due to the two menus needing to always be in sync and existing as separate components this object serves as a centralized
 * location to handle all related data.
 *
 * The menus support 3 levels:
 *
* Categories - the top level, these are the actual icons that appear in the menus
 * Nav Links - the first level of nesting, these are dropdowns in the desktop nav and expansions in the mobile nav
 * Sub Nav Links - this is a second level of nesting, that is a Nav Link can expand to contain Sub Nav Links
 *
 * Note that while additional levels of depth are possible it creates menus that are too nested and is considered bad practice -
 * if additional sub menus are needed it's best to rethink them so that they fit the existing 3-level structure.
 *
 * The parameters of each nav item are as follows:
 *
 * id: a unique string identifier, this is used in the mobile nav to keep track of the expand state of each menu item
 * label: the text that will appear on the screen
 * iconPath: the SVG image file containing the icon. Only applies to the top-level categories since only they have icons
 * routerLinkUrl: if the menu item is a direct link (as opposed to a (click) event) this defines where the link goes
 * navActionType: if the menu item is a click event this defines the event type, which is then mapped to a function in the header component
 * isExpandable: whether or not this menu item is expandable, that is has a nested sub-menu beneath it
 * permissions: contains permission data that controls the display of the menu item
 * navLinks: a list of sub-menu items, with each having all of the above properties (with the exception of iconPath)
 * subNavLinks: same as navLinks, but for the 3rd level of menu
 *
 * Note: A nav item does one of 3 things when clicked - navigates to a differennt page, executes some function, or expands its sub-menu.
 * These 3 things are represented by routerLinkUrl, navActionType, and isExpandable as described above, and since they are mutually
 * exclusive actions only one should be present on a given nav item.
 *
 */

const navData = [
  // HOME
  {
    id: 'home',
    label: 'Home',
    routerLinkUrl: '/app/home',
    iconPath: './assets/images/nav-icons/home.svg',
    isExpandable: false,
  },

  // RECIPES
   {
     id: 'recipes',
     label: 'Recipes',
     routerLinkUrl: '/app/recipes',
     iconPath: './assets/images/nav-icons/utilities.svg',
     isExpandable: false
   },

  // TRAVEL BLOG
   {
     id: 'travel-blog',
     label: 'Travel Blog',
     routerLinkUrl: '/app/travel-blog',
     iconPath: './assets/images/nav-icons/utilities.svg',
     isExpandable: false
   },

  // SETTINGS
  {
    id: 'settings',
    label: 'Settings',
    iconPath: './assets/images/nav-icons/utilities.svg',
    isExpandable: false
  }
];

export default navData;
