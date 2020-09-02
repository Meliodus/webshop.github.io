export default {
  items: [
    {
      id: "navigation",
      title: "Home",
      type: "group",
      icon: "icon-navigation",
      children: [
        {
          id: "dashboard",
          title: "Dashboard",
          type: "item",
          url: "/dashboard/default",
          icon: "feather icon-home",
        },
      ],
    },
    {
      id: "ui-element",
      title: "DOMAIN MANAGEMENT",
      type: "group",
      icon: "icon-ui",
      children: [
        {
          id: "basic",
          title: "Domains",
          type: "collapse",
          icon: "feather icon-box",
          children: [
            {
              id: "tabs-pills",
              title: "Active",
              type: "item",
              icon: "feather icon-box red",
              url: "/basic/active",
            },
            {
              id: "pending",
              title: "Pending",
              type: "item",
              icon: "feather icon-box",
              url: "/basic/pending",
            },
          ],
        },
      ],
    },
    {
      id: "ui-forms",
      title: "CLIENTS",
      type: "group",
      icon: "icon-group",
      children: [
        {
          id: "clients",
          title: "Clients",
          type: "item",
          url: "/forms/clients",
          icon: "feather icon-file-text",
        },
      ],
    },
    {
      id: "chart-maps",
      title: "Analytics",
      type: "group",
      icon: "icon-charts",
      children: [
        {
          id: "charts",
          title: "Analytics",
          type: "item",
          icon: "feather icon-pie-chart",
          url: "/charts/nvd3",
        },
        {
          id: "maps",
          title: "Locations",
          type: "item",
          icon: "feather icon-map",
          url: "/maps/google-map",
        },
      ],
    },
    {
      id: "pages",
      title: "Subscriptions",
      type: "group",
      icon: "icon-pages",
      children: [
        // {
        //   id: "auth",
        //   title: "Authentication",
        //   type: "collapse",
        //   icon: "feather icon-lock",
        //   badge: {
        //     title: "New",
        //     type: "label-danger",
        //   },

        // {
        //   id: "signup-1",
        //   title: "Sign up",
        //   type: "item",
        //   url: "/auth/signup-1",
        //   target: true,
        //   breadcrumbs: false,
        // },
        // {
        //   id: "signin-1",
        //   title: "Sign in",
        //   type: "item",
        //   url: "/auth/signin-1",
        //   target: true,
        //   breadcrumbs: false,
        // },

        // {
        //   id: "disabled-menu",
        //   title: "Disabled Menu",
        //   type: "item",
        //   url: "#",
        //   classes: "nav-item disabled",
        //   icon: "feather icon-power",
        // },
        {
          id: "buy-now",
          title: "GoPro",
          type: "item",
          icon: "feather icon-user",
          classes: "nav-item",
          url: "https://",
          target: true,
          external: true,
          badge: {
            title: "v1.0",
            type: "label-primary",
          },
        },
      ],
    },
  ],
};
