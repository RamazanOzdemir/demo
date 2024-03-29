export default {
  header: {
    self: {},
    items: [
      {
        title: "*****",
        root: true,
        alignment: "left",
        page: "dashboard",
        translate: "MENU.DASHBOARD"
      },
      {
        title: "Material UI",
        root: true,
        alignment: "left",
        toggle: "click",
        submenu: [
          {
            title: "Layout",
            bullet: "dot",
            submenu: [
              {
                title: "Box",
                bullet: "line",
                page: "google-material/layout/box"
              },
              {
                title: "Container",
                bullet: "line",
                page: "google-material/layout/container"
              },
              {
                title: "Grid",
                bullet: "line",
                page: "google-material/layout/grid"
              },
              {
                title: "Grid list",
                bullet: "line",
                page: "google-material/layout/grid-list"
              },
              {
                title: "Hidden",
                bullet: "line",
                page: "google-material/layout/hidden"
              }
            ]
          },
          {
            title: "Inputs",
            bullet: "dot",
            submenu: [
              {
                title: "Autocomplete",
                page: "google-material/inputs/autocomplete",
                bullet: "line",
                permission: "accessToECommerceModule"
              },
              {
                title: "Buttons",
                page: "google-material/inputs/buttons",
                bullet: "line"
              },
              {
                title: "Checkboxes",
                page: "google-material/inputs/checkboxes",
                bullet: "line"
              },
              {
                title: "Pickers",
                page: "google-material/inputs/pickers",
                bullet: "line"
              },
              {
                title: "Radio Buttons",
                page: "google-material/inputs/radio-buttons",
                bullet: "line"
              },
              {
                title: "Selects",
                page: "google-material/inputs/selects",
                bullet: "line"
              },
              {
                title: "Switches",
                page: "google-material/inputs/switches",
                bullet: "line"
              },
              {
                title: "Text Fields",
                page: "google-material/inputs/text-fields",
                bullet: "line"
              },
              {
                title: "Transfer List",
                page: "google-material/inputs/transfer-list",
                bullet: "line"
              }
            ]
          },
          {
            title: "Navigation",
            bullet: "dot",
            submenu: [
              {
                title: "Bottom Navigation",
                bullet: "line",
                page: "google-material/navigation/bottom-navigation"
              },
              {
                title: "Breadcrumbs",
                bullet: "line",
                page: "google-material/navigation/breadcrumbs"
              },
              {
                title: "Drawers",
                bullet: "line",
                page: "google-material/navigation/drawer"
              },
              {
                title: "Links",
                bullet: "line",
                page: "google-material/navigation/links"
              },
              {
                title: "Menus",
                bullet: "line",
                page: "google-material/navigation/menus"
              },
              {
                title: "Steppers",
                bullet: "line",
                page: "google-material/navigation/steppers"
              },
              {
                title: "Tabs",
                bullet: "line",
                page: "google-material/navigation/tabs"
              }
            ]
          },
          {
            title: "Surfaces",
            bullet: "dot",
            submenu: [
              {
                title: "App Bar",
                bullet: "line",
                page: "google-material/surfaces/app-bar"
              },
              {
                title: "Paper",
                bullet: "line",
                page: "google-material/surfaces/paper"
              },
              {
                title: "Cards",
                bullet: "line",
                page: "google-material/surfaces/cards"
              },
              {
                title: "Expansion Panels",
                bullet: "line",
                page: "google-material/surfaces/expansion-panels"
              }
            ]
          },
          {
            title: "Feedback",
            bullet: "dot",
            submenu: [
              {
                title: "Progress",
                bullet: "line",
                page: "google-material/feedback/progress"
              },
              {
                title: "Dialogs",
                bullet: "line",
                page: "google-material/feedback/dialogs"
              },
              {
                title: "Snackbars",
                bullet: "line",
                page: "google-material/feedback/snackbars"
              }
            ]
          },
          {
            title: "Data Display",
            bullet: "dot",
            submenu: [
              {
                title: "Avatars",
                bullet: "line",
                page: "google-material/data-displays/avatars"
              },
              {
                title: "Badges",
                bullet: "line",
                page: "google-material/data-displays/badges"
              },
              {
                title: "Chips",
                bullet: "line",
                page: "google-material/data-displays/chips"
              },
              {
                title: "Dividers",
                bullet: "line",
                page: "google-material/data-displays/dividers"
              },
              {
                title: "Icons",
                bullet: "line",
                page: "google-material/data-displays/icons"
              },
              {
                title: "Lists",
                bullet: "line",
                page: "google-material/data-displays/lists"
              },
              {
                title: "Tables",
                bullet: "line",
                page: "google-material/data-displays/tables"
              },
              {
                title: "Tooltips",
                bullet: "line",
                page: "google-material/data-displays/tooltips"
              },
              {
                title: "Typography",
                bullet: "line",
                page: "google-material/data-displays/typography"
              }
            ]
          },
          {
            title: "Utils",
            bullet: "dot",
            submenu: [
              {
                title: "Click Away Listener",
                bullet: "line",
                page: "google-material/utils/click-away-listener"
              },
              {
                title: "Modal",
                bullet: "line",
                page: "google-material/utils/modal"
              },
              {
                title: "No SSR",
                bullet: "line",
                page: "google-material/utils/no-ssr"
              },
              {
                title: "Popover",
                bullet: "line",
                page: "google-material/utils/popover"
              },
              {
                title: "Popper",
                bullet: "line",
                page: "google-material/utils/popper"
              },
              {
                title: "Portal",
                bullet: "line",
                page: "google-material/utils/portal"
              },
              {
                title: "Transitions",
                bullet: "line",
                page: "google-material/utils/transitions"
              },
              {
                title: "useMediaQuery",
                bullet: "line",
                page: "google-material/utils/use-media-query"
              }
            ]
          }
        ]
      },
      {
        title: "Bootstrap",
        root: true,
        alignment: "left",
        toggle: "click",
        submenu: {
          type: "mega",
          width: "800px",
          alignment: "left",
          columns: [
            {
              items: [
                {
                  title: "Alerts",
                  page: "react-bootstrap/alert"
                },
                {
                  title: "Accordion",
                  page: "react-bootstrap/accordion"
                },
                {
                  title: "Badge",
                  page: "react-bootstrap/badge"
                },
                {
                  title: "Breadcrumb",
                  page: "react-bootstrap/breadcrumb"
                },
                {
                  title: "Buttons",
                  page: "react-bootstrap/buttons"
                },
                {
                  title: "Button Group",
                  page: "react-bootstrap/button-group"
                },
                {
                  title: "Cards",
                  page: "react-bootstrap/cards"
                }
              ]
            },
            {
              items: [
                {
                  title: "Carousel",
                  page: "react-bootstrap/carousel",
                  bullet: "line"
                },
                {
                  title: "Dropdowns",
                  page: "react-bootstrap/dropdowns",
                  bullet: "line"
                },
                {
                  title: "Forms",
                  page: "react-bootstrap/forms",
                  bullet: "line"
                },
                {
                  title: "Input Group",
                  page: "react-bootstrap/input-group",
                  bullet: "line"
                },
                {
                  title: "Images",
                  page: "react-bootstrap/images",
                  bullet: "line"
                },
                {
                  title: "Figures",
                  page: "react-bootstrap/figures",
                  bullet: "line"
                },
                {
                  title: "Jumbotron",
                  page: "react-bootstrap/jumbotron",
                  bullet: "line"
                }
              ]
            },
            {
              items: [
                {
                  title: "List group",
                  page: "react-bootstrap/list-group",
                  bullet: "dot"
                },
                {
                  title: "Modal",
                  page: "react-bootstrap/modal",
                  bullet: "dot"
                },
                {
                  title: "Navs",
                  page: "react-bootstrap/navs",
                  bullet: "dot"
                },
                {
                  title: "Navbar",
                  page: "react-bootstrap/navbar",
                  bullet: "dot"
                },
                {
                  title: "Overlays",
                  page: "react-bootstrap/overlays",
                  bullet: "dot"
                },
                {
                  title: "Pagination",
                  page: "react-bootstrap/pagination",
                  bullet: "dot"
                },
                {
                  title: "Popovers",
                  page: "react-bootstrap/popovers",
                  bullet: "dot"
                }
              ]
            },
            {
              items: [
                {
                  title: "Progress",
                  page: "react-bootstrap/progress"
                },
                {
                  title: "Spinners",
                  page: "react-bootstrap/spinners"
                },
                {
                  title: "Table",
                  page: "react-bootstrap/table"
                },
                {
                  title: "Tabs",
                  page: "react-bootstrap/tabs"
                },
                {
                  title: "Tooltips",
                  page: "react-bootstrap/tooltips"
                },
                {
                  title: "Toasts",
                  page: "react-bootstrap/toasts"
                }
              ]
            }
          ]
        }
      },
      // {
      //   title: "Components",
      //   root: true,
      //   alignment: "left",
      //   toggle: "click",
      //   submenu: [
      //     {
      //       title: "React Bootstrap",
      //       bullet: "dot",
      //       icon: "flaticon-web",
      //       submenu: [
      //
      //
      //       ]
      //     }
      //   ]
      // },
      {
        title: "Custom",
        root: true,
        alignment: "left",
        toggle: "click",
        submenu: [
          {
            title: "Layout Builder",
            icon: "flaticon2-expand",
            page: "builder"
          },
          {
            title: "Error Pages",
            bullet: "dot",
            icon: "flaticon2-warning",
            submenu: [
              {
                title: "Error 1",
                page: "error/error-v1"
              },
              {
                title: "Error 2",
                page: "error/error-v2"
              },
              {
                title: "Error 3",
                page: "error/error-v3"
              },
              {
                title: "Error 4",
                page: "error/error-v4"
              },
              {
                title: "Error 5",
                page: "error/error-v5"
              },
              {
                title: "Error 6",
                page: "error/error-v6"
              }
            ]
          }
        ]
      }
    ]
  },
  aside: {
    self: {},
    items: [
     //{
     //  title: "Da",
     //  root: true,
     //  icon: "flaticon2-architecture-and-city",
     //  page: "dashb",
     //  translate: "MENU.DASHBOARD",
     //  bullet: "dot"
     //},
     //{
     //  title: "Layout Builder",
     //  root: true,
     //  icon: "flaticon2-expand",
     //  page: "builder"
     //},
     //{ section: "Compo" },
      {
        title: "Products",
        root: true,
        bullet: "dot",
        icon: "flaticon-symbol",
        submenu: [
          {
            title: "Add Product",
            page : "dashboard",
            bullet: "dot",
            //submenu: [
            //  {
            //    title: "Box",
            //    page: "google-material/layout/box"
            //  },
            //  {
            //    title: "Container",
            //    page: "google-material/layout/container"
            //  },
            //  {
            //    title: "Grid",
            //    page: "google-material/layout/grid"
            //  },
            //  {
            //    title: "Grid list",
            //    page: "google-material/layout/grid-list"
            //  },
            //  {
            //    title: "Hidden",
            //    page: "google-material/layout/hidden"
            //  }
            //]
          },
          {
            title: "Add Product Portion",
            bullet: "dot",  
          },
          {
            title: "Add Product Portion Price",
            bullet: "dot",
          },
          {
            title: "Batch Price Change",
            bullet: "dot",
          },
          {
            title: "Batch Product Add",
            bullet: "dot",
          },
        ]
      },
      
      // {
      //   root: true,
      //   title: "Documentation",
      //   bullet: "dot",
      //   icon: "flaticon2-file-1",
      //   submenu: [
      //     { title: "Quick Start", page: "docs/quick-start" },
      //     { title: "Overview", page: "docs/overview" },
      //     { title: "Deployment", page: "docs/deployment" },
      //     { title: "Internationalization", page: "docs/i18n" },
      //     { title: "Mock Backend", page: "docs/mock-backend" },
      //     { title: "Create a Page", page: "docs/create-a-page" }
      //   ]
      // },
      {
        title: "Menus",
        bullet: "line",
        icon: "flaticon-menu-2",
        submenu: [
          {
            title: "Add Menu",
            bullet: "line",
            page: "error/error-v1"
          },
          {
            title: "Add Menu Category",
            bullet: "line",
            page: "error/error-v2"
          },
          {
            title: "Select Product for Menu Category",
            bullet: "line",
            page: "error/error-v3"
          },
        ]
      },
      {
        title: "Users",
        //root: true,
        bullet: "dot",
        icon: "flaticon-users",
        submenu: [
          {
            title: "Add SambaPOS User Group",
            bullet: "dot",
          },
          {
            title: "Add SambaPOS User Group Authority",
            bullet: "dot",  
          },
          {
            title: "Add SambaPOS User",
            bullet: "dot",
          },
          {
            title: "Add Neptune User Group",
            bullet: "dot",
          },
          {
            title: "Add Neptune User Group Authorit",
            bullet: "dot",
          },
          {
            title: "Add Neptune User",
            bullet: "dot",
          },
        ]
      },
      {
        title: "Tickets",
        //root: true,
        bullet: "dot",
        icon: "flaticon-coins",
        submenu: [
          {
            title: "Add Order Tag",
            bullet: "dot",
          },
          {
            title: "Add Ticket Tag",
            bullet: "dot",  
          },
          {
            title: "Add Price Tag",
            bullet: "dot",
          },
        ]
      },
      {
        title: "Entities",
        //root: true,
        bullet: "dot",
        icon: "flaticon-graphic",
        submenu: [
          {
            title: "Add Entity Screen",
            bullet: "dot",
          },
          {
            title: "Add Entity",
            bullet: "dot",  
          },
        ]
      },
      {
        title: "Ordering System",
        icon: "flaticon-order",
        bullet: "dot",
        submenu: [
          {
            title: "Order List",
            bullet: "dot",
          },
          {
            title: "Add Order",
            bullet: "dot",
          },
        ]
      },
      {
        title: "Branches",
        //root: true,
        bullet: "dot",
        icon: "flaticon-users",
        submenu: [
          {
            title: "Add Branch",
            bullet: "dot",
          },
          {
            title: "Branch Tag",
            bullet: "dot",  
          },
        ]
      },
      {
        title: "Inventory",
        //root: true,
        bullet: "dot",
        icon: "flaticon-users",
        submenu: [
          {
            title: "Track Inventories",
            bullet: "dot",
          },
          {
            title: "Add Inventory Product",
            bullet: "dot",  
          },
          {
            title: "Add Receipt",
            bullet: "dot",
          },
          {
            title: "Add Inventory",
            bullet: "dot",
          },
        ]
      },
      {
        title: "Send Updates",
        //root: true,
        bullet: "dot",
        icon: "flaticon-users",
        submenu: [
          {
            title: "Send Data to Branches",
            bullet: "dot",
          },
        ]
      },
      {
        title: "Settings",
        //root: true,
        bullet: "dot",
        icon: "flaticon-settings",
        submenu: [
          {
            title: "Shared Entity Select",
            bullet: "dot",
          },
        ]
      },
    ]
  }
};
