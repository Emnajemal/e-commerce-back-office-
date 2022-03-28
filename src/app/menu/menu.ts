import { CoreMenu } from '@core/types';

//? DOC: http://localhost:7777/demo/vuexy-angular-admin-dashboard-template/documentation/guide/development/navigation-menus.html#interface

export const menu: CoreMenu[] = [
  // Dashboard
  {
    id: 'dashboard',
    title: 'Dashboard',
    translate: 'MENU.DASHBOARD.COLLAPSIBLE',
    type: 'collapsible',
    // role: ['Admin'], //? To hide collapsible based on user role
    icon: 'home',
    badge: {
      title: '2',
      translate: 'MENU.DASHBOARD.BADGE',
      classes: 'badge-light-warning badge-pill'
    },
    children: [
      {
        id: 'analytics',
        title: 'Analytics',
        translate: 'MENU.DASHBOARD.ANALYTICS',
        type: 'item',
        role: ['Admin'], //? To set multiple role: ['Admin', 'Client']
        icon: 'circle',
        url: 'dashboard/analytics'
      },
      {
        // If role is not assigned will be display to all
        id: 'ecommerce',
        title: 'eCommerce',
        translate: 'MENU.DASHBOARD.ECOMMERCE',
        type: 'item',
        icon: 'circle',
        url: 'dashboard/ecommerce'
      }
    ]
  },
  // Apps & Pages
  {
    id: 'apps',
    type: 'section',
    title: 'Apps & Pages',
    translate: 'MENU.APPS.SECTION',
    icon: 'package',
    children: [
      {
        id: 'email',
        title: 'Email',
        translate: 'MENU.APPS.EMAIL',
        type: 'item',
        icon: 'mail',
        url: 'apps/email'
      },
      {
        id: 'chat',
        title: 'Chat',
        translate: 'MENU.APPS.CHAT',
        type: 'item',
        icon: 'message-square',
        url: 'apps/chat'
      },
      {
        id: 'todo',
        title: 'Todo',
        translate: 'MENU.APPS.TODO',
        type: 'item',
        icon: 'check-square',
        url: 'apps/todo'
      },
      {
        id: 'calendar',
        title: 'Calendar',
        translate: 'MENU.APPS.CALENDAR',
        type: 'item',
        icon: 'calendar',
        url: 'apps/calendar'
      },
      {
        id: 'pages',
        title: 'Pages',
        translate: 'MENU.PAGES.SECTION',
        type: 'collapsible',
        icon: 'file-text',
        children: [
          {
            id: 'authentication',
            title: 'Authentication',
            translate: 'MENU.PAGES.AUTH.COLLAPSIBLE',
            type: 'collapsible',
            icon: 'circle',
            children: [
              {
                id: 'login-v1',
                title: 'Login V1',
                translate: 'MENU.PAGES.AUTH.LOGIN1',
                type: 'item',
                url: 'pages/authentication/login-v1',
                openInNewTab: true
              },
              {
                id: 'login-v2',
                title: 'Login V2',
                translate: 'MENU.PAGES.AUTH.LOGIN2',
                type: 'item',
                url: 'pages/authentication/login-v2',
                openInNewTab: true
              },
              {
                id: 'register-v1',
                title: 'Register V1',
                translate: 'MENU.PAGES.AUTH.REGISTER1',
                type: 'item',
                url: 'pages/authentication/register-v1',
                openInNewTab: true
              },
              {
                id: 'register-v2',
                title: 'Register V2',
                translate: 'MENU.PAGES.AUTH.REGISTER2',
                type: 'item',
                url: 'pages/authentication/register-v2',
                openInNewTab: true
              },
              {
                id: 'forgot-password-v1',
                title: 'Forgot Password V1',
                translate: 'MENU.PAGES.AUTH.FORGOTPASSWORD1',
                type: 'item',
                url: 'pages/authentication/forgot-password-v1',
                openInNewTab: true
              },
              {
                id: 'forgot-password-v2',
                title: 'Forgot Password V2',
                translate: 'MENU.PAGES.AUTH.FORGOTPASSWORD2',
                type: 'item',
                url: 'pages/authentication/forgot-password-v2',
                openInNewTab: true
              },
              {
                id: 'reset-password-v1',
                title: 'Reset Password V1',
                translate: 'MENU.PAGES.AUTH.RESETPASSWORD1',
                type: 'item',
                url: 'pages/authentication/reset-password-v1',
                openInNewTab: true
              },
              {
                id: 'reset-password-v2',
                title: 'Reset Password V2',
                translate: 'MENU.PAGES.AUTH.RESETPASSWORD2',
                type: 'item',
                url: 'pages/authentication/reset-password-v2',
                openInNewTab: true
              }
            ]
          },
          {
            id: 'account-settings',
            title: 'Account Settings',
            translate: 'MENU.PAGES.ACCOUNTSETTINGS',
            type: 'item',
            icon: 'circle',
            url: 'pages/account-settings'
          },
          {
            id: 'profile',
            title: 'Profile',
            translate: 'MENU.PAGES.PROFILE',
            type: 'item',
            icon: 'circle',
            url: 'pages/profile'
            // collapsed: true
          },
          {
            id: 'faq',
            title: 'FAQ',
            translate: 'MENU.PAGES.FAQ',
            type: 'item',
            icon: 'circle',
            url: 'pages/faq'
          },
          {
            id: 'knowledgeBase',
            title: 'Knowledge Base',
            translate: 'MENU.PAGES.KB',
            type: 'item',
            icon: 'circle',
            url: 'pages/knowledge-base'
          },
          {
            id: 'pricing',
            title: 'Pricing',
            translate: 'MENU.PAGES.PRICING',
            type: 'item',
            icon: 'circle',
            url: 'pages/pricing'
          },

          {
            id: 'blog',
            title: 'Blog',
            translate: 'MENU.PAGES.BLOG.COLLAPSIBLE',
            type: 'collapsible',
            icon: 'circle',
            children: [
              {
                id: 'blog-list',
                title: 'List',
                translate: 'MENU.PAGES.BLOG.LIST',
                type: 'item',
                url: 'pages/blog-list'
              },
              {
                id: 'blog-details',
                title: 'Detail',
                translate: 'MENU.PAGES.BLOG.DETAILS',
                type: 'item',
                url: 'pages/blog-details'
              },
              {
                id: 'blog-edit',
                title: 'Edit',
                translate: 'MENU.PAGES.BLOG.EDIT',
                type: 'item',
                url: 'pages/blog-edit'
              }
            ]
          },

          {
            id: 'mail-template',
            title: 'Mail Template',
            translate: 'MENU.PAGES.MAIL.COLLAPSIBLE',
            type: 'collapsible',
            icon: 'circle',
            children: [
              {
                id: 'mail-welcome',
                title: 'Welcome',
                translate: 'MENU.PAGES.MAIL.WELCOME',
                type: 'item',
                url: 'https://pixinvent.com/demo/vuexy-mail-template/mail-welcome.html',
                externalUrl: true,
                openInNewTab: true
              },
              {
                id: 'mail-reset',
                title: 'Reset Password',
                translate: 'MENU.PAGES.MAIL.RESET',
                type: 'item',
                url: 'https://pixinvent.com/demo/vuexy-mail-template/mail-reset-password.html',
                externalUrl: true,
                openInNewTab: true
              },
              {
                id: 'mail-verify',
                title: 'Verify',
                translate: 'MENU.PAGES.MAIL.VERIFY',
                type: 'item',
                url: 'https://pixinvent.com/demo/vuexy-mail-template/mail-verify-email.html',
                externalUrl: true,
                openInNewTab: true
              },
              {
                id: 'mail-deactivate',
                title: 'Deactivate',
                translate: 'MENU.PAGES.MAIL.DEACTIVATE',
                type: 'item',
                url: 'https://pixinvent.com/demo/vuexy-mail-template/mail-deactivate-account.html',
                externalUrl: true,
                openInNewTab: true
              },
              {
                id: 'mail-invoice',
                title: 'Invoice',
                translate: 'MENU.PAGES.MAIL.INVOICE',
                type: 'item',
                url: 'https://pixinvent.com/demo/vuexy-mail-template/mail-invoice.html',
                externalUrl: true,
                openInNewTab: true
              },
              {
                id: 'mail-promotional',
                title: 'Promotional',
                translate: 'MENU.PAGES.MAIL.PROMOTIONAL',
                type: 'item',
                url: 'https://pixinvent.com/demo/vuexy-mail-template/mail-promotional.html',
                externalUrl: true,
                openInNewTab: true
              }
            ]
          },

          {
            id: 'miscellaneous',
            title: 'Miscellaneous',
            translate: 'MENU.PAGES.MISC.COLLAPSIBLE',
            type: 'collapsible',
            icon: 'circle',
            children: [
              {
                id: 'misc-comingsoon',
                title: 'Coming Soon',
                translate: 'MENU.PAGES.MISC.COMINGSOON',
                type: 'item',
                url: 'pages/miscellaneous/coming-soon',
                openInNewTab: true
              },

              {
                id: 'misc-not-authorized',
                title: 'Not Authorized',
                translate: 'MENU.PAGES.MISC.NOTAUTH',
                type: 'item',
                url: 'pages/miscellaneous/not-authorized',
                openInNewTab: true
              },
              {
                id: 'maintenance',
                title: 'Maintenance',
                translate: 'MENU.PAGES.MISC.MAINTENANCE',
                type: 'item',
                url: 'pages/miscellaneous/maintenance',
                openInNewTab: true
              },
              {
                id: 'error',
                title: 'Error',
                translate: 'MENU.PAGES.MISC.ERROR',
                type: 'item',
                url: 'pages/miscellaneous/error',
                openInNewTab: true
              }
            ]
          }
        ]
      },
      {
        id: 'invoice',
        title: 'Invoice',
        translate: 'MENU.APPS.INVOICE.COLLAPSIBLE',
        type: 'collapsible',
        icon: 'file-text',
        children: [
          {
            id: 'invoice-list',
            title: 'List',
            translate: 'MENU.APPS.INVOICE.LIST',
            type: 'item',
            icon: 'circle',
            url: 'apps/invoice/list'
          },
          {
            id: 'invoicePreview',
            title: 'Preview',
            translate: 'MENU.APPS.INVOICE.PREVIEW',
            type: 'item',
            icon: 'circle',
            url: 'apps/invoice/preview'
          },
          {
            id: 'invoiceEdit',
            title: 'Edit',
            translate: 'MENU.APPS.INVOICE.EDIT',
            type: 'item',
            icon: 'circle',
            url: 'apps/invoice/edit'
          },
          {
            id: 'invoiceAdd',
            title: 'Add',
            translate: 'MENU.APPS.INVOICE.ADD',
            type: 'item',
            icon: 'circle',
            url: 'apps/invoice/add'
          }
        ]
      },
      {
        id: 'e-commerce',
        title: 'eCommerce',
        translate: 'MENU.APPS.ECOMMERCE.COLLAPSIBLE',
        type: 'collapsible',
        icon: 'shopping-cart',
        children: [
          {
            id: 'shop',
            title: 'Shop',
            translate: 'MENU.APPS.ECOMMERCE.SHOP',
            type: 'item',
            icon: 'circle',
            url: 'apps/e-commerce/shop'
          },
          {
            id: 'details',
            title: 'Details',
            translate: 'MENU.APPS.ECOMMERCE.DETAIL',
            type: 'item',
            icon: 'circle',
            url: 'apps/e-commerce/details'
          },
          {
            id: 'wishList',
            title: 'Wish List',
            translate: 'MENU.APPS.ECOMMERCE.WISHLIST',
            type: 'item',
            icon: 'circle',
            url: 'apps/e-commerce/wishlist'
          },
          {
            id: 'checkout',
            title: 'Checkout',
            translate: 'MENU.APPS.ECOMMERCE.CHECKOUT',
            type: 'item',
            icon: 'circle',
            url: 'apps/e-commerce/checkout'
          }
        ]
      },
      {
        id: 'users',
        title: 'User',
        translate: 'MENU.APPS.USER.COLLAPSIBLE',
        type: 'collapsible',
        icon: 'user',
        children: [
          {
            id: 'list',
            title: 'List',
            translate: 'MENU.APPS.USER.LIST',
            type: 'item',
            icon: 'circle',
            url: 'apps/user/user-list'
          },
          {
            id: 'view',
            title: 'View',
            translate: 'MENU.APPS.USER.VIEW',
            type: 'item',
            icon: 'circle',
            url: 'apps/user/user-view'
          },
          {
            id: 'edit',
            title: 'Edit',
            translate: 'MENU.APPS.USER.EDIT',
            type: 'item',
            icon: 'circle',
            url: 'apps/user/user-edit'
          }
        ]
      }
    ]
  },
  // User Interface
  {
    id: 'user-interface',
    type: 'section',
    title: 'User Interface',
    translate: 'MENU.UI.SECTION',
    icon: 'layers',
    children: [
      {
        id: 'typography',
        title: 'Typography',
        translate: 'MENU.UI.TYPOGRAPHY',
        type: 'item',
        icon: 'type',
        url: 'ui/content/typography'
      },
      {
        id: 'colors',
        title: 'Colors',
        translate: 'MENU.UI.COLORS',
        type: 'item',
        icon: 'droplet',
        url: 'ui/colors'
      },
      {
        id: 'feather',
        title: 'Feather',
        translate: 'MENU.UI.FEATHER',
        type: 'item',
        icon: 'eye',
        url: 'ui/icons/feather'
      },
      {
        id: 'cards',
        title: 'Cards',
        translate: 'MENU.UI.CARDS.COLLAPSIBLE',
        type: 'collapsible',
        icon: 'credit-card',
        badge: {
          title: 'New',
          translate: 'MENU.UI.CARDS.BADGE',
          classes: 'badge-light-success badge-pill'
        },
        children: [
          {
            id: 'card-basic',
            title: 'Basic',
            translate: 'MENU.UI.CARDS.BASIC',
            type: 'item',
            icon: 'circle',
            url: 'ui/card/card-basic'
          },
          {
            id: 'card-advance',
            title: 'Advance',
            translate: 'MENU.UI.CARDS.ADVANCE',
            type: 'item',
            icon: 'circle',
            url: 'ui/card/advance'
          },
          {
            id: 'card-statistics',
            title: 'Statistics',
            translate: 'MENU.UI.CARDS.STATISTICS',
            type: 'item',
            icon: 'circle',
            url: 'ui/card/statistics'
          },
          {
            id: 'Card-analytics',
            title: 'Analytics',
            translate: 'MENU.UI.CARDS.ANALYTICS',
            type: 'item',
            icon: 'circle',
            url: 'ui/card/analytics'
          },
          {
            id: 'card-actions',
            title: 'Actions',
            translate: 'MENU.UI.CARDS.ACTIONS',
            type: 'item',
            icon: 'circle',
            url: 'ui/card/actions'
          }
        ]
      },
      {
        id: 'components',
        title: 'Components',
        translate: 'MENU.UI.COMPONENTS.COLLAPSIBLE',
        type: 'collapsible',
        icon: 'archive',
        children: [
          {
            id: 'components-alerts',
            title: 'Alerts',
            translate: 'MENU.UI.COMPONENTS.ALERTS',
            type: 'item',
            icon: 'circle',
            url: 'components/alerts'
          },
          {
            id: 'components-avatar',
            title: 'Avatar',
            translate: 'MENU.UI.COMPONENTS.AVATAR',
            type: 'item',
            icon: 'circle',
            url: 'components/avatar'
          },
          {
            id: 'components-badges',
            title: 'Badges',
            translate: 'MENU.UI.COMPONENTS.BADGES',
            type: 'item',
            icon: 'circle',
            url: 'components/badges'
          },
          {
            id: 'components-breadcrumbs',
            title: 'Breadcrumbs',
            translate: 'MENU.UI.COMPONENTS.BREADCRUMBS',
            type: 'item',
            icon: 'circle',
            url: 'components/breadcrumbs'
          },
          {
            id: 'components-buttons',
            title: 'Buttons',
            translate: 'MENU.UI.COMPONENTS.BUTTONS',
            type: 'item',
            icon: 'circle',
            url: 'components/buttons'
          },
          {
            id: 'components-carousel',
            title: 'Carousel',
            translate: 'MENU.UI.COMPONENTS.CAROUSEL',
            type: 'item',
            icon: 'circle',
            url: 'components/carousel'
          },
          {
            id: 'components-collapse',
            title: 'Collapse',
            translate: 'MENU.UI.COMPONENTS.COLLAPSE',
            type: 'item',
            icon: 'circle',
            url: 'components/collapse'
          },
          {
            id: 'components-divider',
            title: 'Divider',
            translate: 'MENU.UI.COMPONENTS.DIVIDER',
            type: 'item',
            icon: 'circle',
            url: 'components/divider'
          },
          {
            id: 'components-drop-downs',
            title: 'Dropdowns',
            translate: 'MENU.UI.COMPONENTS.DROPDOWNS',
            type: 'item',
            icon: 'circle',
            url: 'components/dropdowns'
          },
          {
            id: 'components-list-group',
            title: 'List Group',
            translate: 'MENU.UI.COMPONENTS.GROUP',
            type: 'item',
            icon: 'circle',
            url: 'components/list-group'
          },
          {
            id: 'components-media-objects',
            title: 'Media Objects',
            translate: 'MENU.UI.COMPONENTS.OBJECTS',
            type: 'item',
            icon: 'circle',
            url: 'components/media-objects'
          },
          {
            id: 'components-modals',
            title: 'Modals',
            translate: 'MENU.UI.COMPONENTS.MODALS',
            type: 'item',
            icon: 'circle',
            url: 'components/modals'
          },
          {
            id: 'components-navs',
            title: 'Navs',
            translate: 'MENU.UI.COMPONENTS.COMPONENT',
            type: 'item',
            icon: 'circle',
            url: 'components/navs'
          },
          {
            id: 'components-pagination',
            title: 'Pagination',
            translate: 'MENU.UI.COMPONENTS.PAGINATION',
            type: 'item',
            icon: 'circle',
            url: 'components/pagination'
          },
          {
            id: 'components-pill-badges',
            title: 'Pill Badges',
            translate: 'MENU.UI.COMPONENTS.PBADGES',
            type: 'item',
            icon: 'circle',
            url: 'components/pill-badges'
          },
          {
            id: 'components-pills',
            title: 'Pills',
            translate: 'MENU.UI.COMPONENTS.PILLS',
            type: 'item',
            icon: 'circle',
            url: 'components/pills'
          },
          {
            id: 'components-popovers',
            title: 'Popovers',
            translate: 'MENU.UI.COMPONENTS.POPOVERS',
            type: 'item',
            icon: 'circle',
            url: 'components/popovers'
          },
          {
            id: 'components-progress',
            title: 'Progress',
            translate: 'MENU.UI.COMPONENTS.PROGRESS',
            type: 'item',
            icon: 'circle',
            url: 'components/progress'
          },
          {
            id: 'components-ratings',
            title: 'Ratings',
            translate: 'MENU.UI.COMPONENTS.RATINGS',
            type: 'item',
            icon: 'circle',
            url: 'components/ratings'
          },
          {
            id: 'components-spinner',
            title: 'Spinner',
            translate: 'MENU.UI.COMPONENTS.SPINNER',
            type: 'item',
            icon: 'circle',
            url: 'components/spinner'
          },
          {
            id: 'components-tabs',
            title: 'Tabs',
            translate: 'MENU.UI.COMPONENTS.TABS',
            type: 'item',
            icon: 'circle',
            url: 'components/tabs'
          },
          {
            id: 'components-timeline',
            title: 'Timeline',
            translate: 'MENU.UI.COMPONENTS.TIMELINE',
            type: 'item',
            icon: 'circle',
            url: 'components/timeline'
          },
          {
            id: 'components-toasts',
            title: 'Toasts',
            translate: 'MENU.UI.COMPONENTS.TOASTS',
            type: 'item',
            icon: 'circle',
            url: 'components/toasts'
          },
          {
            id: 'components-tooltips',
            title: 'Tooltips',
            translate: 'MENU.UI.COMPONENTS.TOOLTIPS',
            type: 'item',
            icon: 'circle',
            url: 'components/tooltips'
          }
        ]
      },
      {
        id: 'extensions',
        title: 'Extension',
        translate: 'MENU.UI.EX.COLLAPSIBLE',
        type: 'collapsible',
        icon: 'plus-circle',
        children: [
          {
            id: 'ex-sweet-alerts',
            title: 'Sweet Alerts',
            translate: 'MENU.UI.EX.SWEET_ALERTS',
            icon: 'circle',
            type: 'item',
            url: '/extensions/sweet-alerts'
          },
          {
            id: 'ex-blockui',
            title: 'BlockUI',
            translate: 'MENU.UI.EX.BLOCKUI',
            icon: 'circle',
            type: 'item',
            url: 'extensions/blockui'
          },
          {
            id: 'ex-toastr',
            title: 'Toastr',
            translate: 'MENU.UI.EX.TOASTER',
            icon: 'circle',
            type: 'item',
            url: 'extensions/toastr'
          },
          {
            id: 'ex-noui-slider',
            title: 'Slider',
            translate: 'MENU.UI.EX.SLIDER',
            icon: 'circle',
            type: 'item',
            url: '/extensions/noui-slider'
          },
          {
            id: 'ex-drag-drop',
            title: 'Drag & Drop',
            translate: 'MENU.UI.EX.DRAGDROP',
            icon: 'circle',
            type: 'item',
            url: 'extensions/drag-drop'
          },
          {
            id: 'ex-tour',
            title: 'Tour',
            translate: 'MENU.UI.EX.TOUR',
            icon: 'circle',
            type: 'item',
            url: 'extensions/tour'
          },
          {
            id: 'ex-clip-board',
            title: 'Clipboard',
            translate: 'MENU.UI.EX.CLIPBOARD',
            icon: 'circle',
            type: 'item',
            url: 'extensions/clipboard'
          },
          {
            id: 'ex-media-player',
            title: 'Media Player',
            translate: 'MENU.UI.EX.MEDIAPLAYER',
            icon: 'circle',
            type: 'item',
            url: 'extensions/media-player'
          },
          {
            id: 'ex-content-menu',
            title: 'Context Menu',
            translate: 'MENU.UI.EX.CONTEXTMENU',
            icon: 'circle',
            type: 'item',
            url: 'extensions/context-menu'
          },
          {
            id: 'ex-swiper',
            title: 'Swiper',
            translate: 'MENU.UI.EX.SWIPER',
            icon: 'circle',
            type: 'item',
            url: 'extensions/swiper'
          },
          {
            id: 'ex-tree-view',
            title: 'Tree View',
            translate: 'MENU.UI.EX.TREEVIEW',
            icon: 'circle',
            type: 'item',
            url: 'extensions/tree-view'
          },
          {
            id: 'i18n',
            title: 'I18n',
            translate: 'MENU.UI.EX.I18N',
            icon: 'circle',
            type: 'item',
            url: '/extensions/i18n'
          }
        ]
      },
      {
        id: 'page-layouts',
        title: 'Page Layouts',
        translate: 'MENU.UI.LAYOUTS.COLLAPSIBLE',
        type: 'collapsible',
        icon: 'layout',
        children: [
          {
            id: 'layout-collapsed-menu',
            title: 'Collapsed Menu',
            translate: 'MENU.UI.LAYOUTS.COLLAPSED_MENU',
            icon: 'circle',
            type: 'item',
            url: 'ui/page-layouts/collapsed-menu'
          },
          {
            id: 'layout-boxed',
            title: 'Boxed Layout',
            translate: 'MENU.UI.LAYOUTS.BOXED_LAYOUT',
            icon: 'circle',
            type: 'item',
            url: 'ui/page-layouts/boxed-layout'
          },
          {
            id: 'layout-without-menu',
            title: 'Without Menu',
            translate: 'MENU.UI.LAYOUTS.WITHOUT_MENU',
            icon: 'circle',
            type: 'item',
            url: 'ui/page-layouts/without-menu'
          },
          {
            id: 'layout-empty',
            title: 'Layout Empty',
            translate: 'MENU.UI.LAYOUTS.LAYOUT_EMPTY',
            icon: 'circle',
            type: 'item',
            url: 'ui/page-layouts/layout-empty'
          },
          {
            id: 'layout-blank',
            title: 'Layout Blank',
            translate: 'MENU.UI.LAYOUTS.LAYOUT_BLANK',
            icon: 'circle',
            type: 'item',
            url: 'ui/page-layouts/layout-blank'
          }
        ]
      }
    ]
  },
  // Forms & Tables
  {
    id: 'forms-table',
    type: 'section',
    title: 'Forms & Tables',
    translate: 'MENU.FT.SECTION',
    icon: 'file-text',
    children: [
      {
        id: 'form-elements',
        title: 'Form Elements',
        translate: 'MENU.FT.ELEMENT.COLLAPSIBLE',
        type: 'collapsible',
        icon: 'copy',
        children: [
          {
            id: 'form-elements-input',
            title: 'Input',
            translate: 'MENU.FT.ELEMENT.INPUT',
            type: 'item',
            icon: 'circle',
            url: 'forms/form-elements/input'
          },
          {
            id: 'form-elements-inputgroups',
            title: 'Input Groups',
            translate: 'MENU.FT.ELEMENT.INPUTGROUPS',
            type: 'item',
            icon: 'circle',
            url: 'forms/form-elements/input-groups'
          },
          {
            id: 'form-elements-inputmask',
            title: 'Input Mask',
            translate: 'MENU.FT.ELEMENT.INPUTMASK',
            type: 'item',
            icon: 'circle',
            url: 'forms/form-elements/input-mask'
          },
          {
            id: 'form-elements-textarea',
            title: 'Textarea',
            translate: 'MENU.FT.ELEMENT.TEXTAREA',
            type: 'item',
            icon: 'circle',
            url: 'forms/form-elements/textarea'
          },
          {
            id: 'form-elements-checkbox',
            title: 'Checkbox',
            translate: 'MENU.FT.ELEMENT.CHECKBOX',
            type: 'item',
            icon: 'circle',
            url: 'forms/form-elements/checkbox'
          },
          {
            id: 'form-elements-radio',
            title: 'Radio',
            translate: 'MENU.FT.ELEMENT.RADIO',
            type: 'item',
            icon: 'circle',
            url: 'forms/form-elements/radio'
          },
          {
            id: 'form-elements-switch',
            title: 'Switch',
            translate: 'MENU.FT.ELEMENT.SWITCH',
            type: 'item',
            icon: 'circle',
            url: 'forms/form-elements/switch'
          },
          {
            id: 'form-elements-select',
            title: 'Select',
            translate: 'MENU.FT.ELEMENT.SELECT',
            type: 'item',
            icon: 'circle',
            url: 'forms/form-elements/select'
          },
          {
            id: 'form-elements-numberInput',
            title: 'Number Input',
            translate: 'MENU.FT.ELEMENT.NUMBERINPUT',
            type: 'item',
            icon: 'circle',
            url: 'forms/form-elements/number-input'
          },
          {
            id: 'form-elements-file-uploader',
            title: 'File Uploader',
            translate: 'MENU.FT.ELEMENT.FILEUPLOADER',
            icon: 'circle',
            type: 'item',
            url: 'forms/form-elements/file-uploader'
          },
          {
            id: 'form-elements-quill-editor',
            title: 'Quill Editor',
            translate: 'MENU.FT.ELEMENT.QUILLEDITOR',
            icon: 'circle',
            type: 'item',
            url: 'forms/form-elements/quill-editor'
          },
          {
            id: 'form-elements-flatpicker',
            title: 'Flatpicker',
            translate: 'MENU.FT.ELEMENT.FLATPICKER',
            type: 'item',
            icon: 'circle',
            url: 'forms/form-elements/flatpickr'
          },
          {
            id: 'form-elements-date-time-icker',
            title: 'Date & Time Picker',
            translate: 'MENU.FT.ELEMENT.DATETIMEPICKER',
            type: 'item',
            icon: 'circle',
            url: 'forms/form-elements/date-time-picker'
          }
        ]
      },
      {
        id: 'form-layouts',
        title: 'Form Layouts',
        translate: 'MENU.FT.LAYOUTS',
        type: 'item',
        icon: 'box',
        url: 'forms/form-layout'
      },
      {
        id: 'form-wizard',
        title: 'Form Wizard',
        translate: 'MENU.FT.WIZARD',
        type: 'item',
        icon: 'package',
        url: 'forms/form-wizard'
      },
      {
        id: 'form-validation',
        title: 'Form Validations',
        translate: 'MENU.FT.VALIDATION',
        type: 'item',
        icon: 'check-circle',
        url: 'forms/form-validation'
      },
      {
        id: 'form-repeater',
        title: 'Form Repeater',
        translate: 'MENU.FT.REPEATER',
        type: 'item',
        icon: 'rotate-cw',
        url: 'forms/form-repeater'
      },
      {
        id: 'tables-table',
        title: 'Table',
        translate: 'MENU.FT.TABLE',
        type: 'item',
        icon: 'server',
        url: 'tables/table'
      },
      {
        id: 'tables-datatable',
        title: 'DataTables',
        translate: 'MENU.FT.DATATABLES',
        type: 'item',
        icon: 'grid',
        url: 'tables/datatables'
      }
    ]
  },
  // Charts & Maps
  {
    id: 'charts-maps',
    type: 'section',
    title: 'Charts & Maps',
    translate: 'MENU.CM.SECTION',
    icon: 'bar-chart-2',
    children: [
      {
        id: 'charts',
        title: 'Charts',
        translate: 'MENU.CM.CHARTS.COLLAPSIBLE',
        type: 'collapsible',
        icon: 'pie-chart',
        badge: {
          title: '2',
          translate: 'MENU.CM.CHARTS.BADGE',
          classes: 'badge-light-danger badge-pill'
        },
        children: [
          {
            id: 'apex',
            title: 'Apex',
            translate: 'MENU.CM.CHARTS.APEX',
            type: 'item',
            icon: 'circle',
            url: 'charts-and-maps/apex'
          },
          {
            id: 'chartJs',
            title: 'ChartJS',
            translate: 'MENU.CM.CHARTS.CHARTJS',
            type: 'item',
            icon: 'circle',
            url: 'charts-and-maps/chartjs'
          }
        ]
      },
      {
        id: 'google-maps',
        title: 'Google Maps',
        translate: 'MENU.CM.MAPS',
        icon: 'map',
        type: 'item',
        url: 'charts-and-maps/google-maps'
      }
    ]
  },
  // Others
  {
    id: 'others',
    type: 'section',
    title: 'Others',
    translate: 'MENU.OTHERS.SECTION',
    icon: 'box',
    children: [
      {
        id: 'menu-levels',
        title: 'Menu Levels',
        translate: 'MENU.OTHERS.LEVELS.COLLAPSIBLE',
        icon: 'menu',
        type: 'collapsible',
        children: [
          {
            id: 'second-level',
            title: 'Second Level',
            translate: 'MENU.OTHERS.LEVELS.SECOND',
            icon: 'circle',
            type: 'item',
            url: '#'
          },
          {
            id: 'second-level1',
            title: 'Second Level',
            translate: 'MENU.OTHERS.LEVELS.SECOND1.COLLAPSIBLE',
            icon: 'circle',
            type: 'collapsible',
            children: [
              {
                id: 'third-level',
                title: 'Third Level',
                translate: 'MENU.OTHERS.LEVELS.SECOND1.THIRD',
                type: 'item',
                url: '#'
              },
              {
                id: 'third-level1',
                title: 'Third Level',
                translate: 'MENU.OTHERS.LEVELS.SECOND1.THIRD1',
                type: 'item',
                url: '#'
              }
            ]
          }
        ]
      },
      {
        id: 'disabled-menu',
        title: 'Disabled Menu',
        translate: 'MENU.OTHERS.DISABLED',
        icon: 'eye-off',
        type: 'item',
        url: '#',
        disabled: true
      },
      {
        id: 'documentation',
        title: 'Documentation',
        translate: 'MENU.OTHERS.DOCUMENTATION',
        icon: 'file-text',
        type: 'item',
        url: 'https://pixinvent.com/demo/vuexy-angular-admin-dashboard-template/documentation',
        externalUrl: true,
        openInNewTab: true
      },
      {
        id: 'raise-support',
        title: 'Raise Support',
        translate: 'MENU.OTHERS.SUPPORT',
        icon: 'life-buoy',
        type: 'item',
        url: 'https://pixinvent.ticksy.com/',
        externalUrl: true,
        openInNewTab: true
      }
    ]
  }
];
