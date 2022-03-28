import { snippetCode } from '@core/components/card-snippet/card-snippet.component';

export const snippetCodeDefault: snippetCode = {
  html: `
  <!-- app-breadcrumb component -->
  <app-breadcrumb [breadcrumb]="breadcrumbDefault"></app-breadcrumb>
  <!--/ app-breadcrumb component -->
`,
  ts: `
// importing breadcrumb interface
import { Breadcrumb } from 'app/layout/components/content-header/breadcrumb/breadcrumb.component';

// public
public breadcrumbDefault: Breadcrumb;

// breadcrumb default
this.breadcrumbDefault = {
  links: [
    {
      name: 'Home',
      isLink: true,
      link: '/'
    },
    {
      name: 'Library',
      isLink: true,
      link: '/'
    },
    {
      name: 'Data',
      isLink: false
    }
  ]
};
`
};

export const snippetCodeStyles: snippetCode = {
  html: `
  <!-- app-breadcrumbs component -->
  <app-breadcrumb [breadcrumb]="breadcrumbSlash"></app-breadcrumb>
  <app-breadcrumb [breadcrumb]="breadcrumbDots"></app-breadcrumb>
  <app-breadcrumb [breadcrumb]="breadcrumbDashes"></app-breadcrumb>
  <app-breadcrumb [breadcrumb]="breadcrumbPipes"></app-breadcrumb>
  <app-breadcrumb [breadcrumb]="breadcrumbChevron"></app-breadcrumb>
  <!--/ app-breadcrumbs component -->
`,
  ts: `
// importing breadcrumb interface
import { Breadcrumb } from 'app/layout/components/content-header/breadcrumb/breadcrumb.component';

// public
public breadcrumbSlash: Breadcrumb;
public breadcrumbDots: Breadcrumb;
public breadcrumbDashes: Breadcrumb;
public breadcrumbPipes: Breadcrumb;
public breadcrumbChevron: Breadcrumb;

// breadcrumb slash
this.breadcrumbSlash = {
  type: 'slash',
  links: [
    {
      name: 'Home',
      isLink: true,
      link: '/'
    },
    {
      name: 'Library',
      isLink: true,
      link: '/'
    },
    {
      name: 'Data',
      isLink: false
    }
  ]
};

// breadcrumb dots
this.breadcrumbDots = {
  type: 'dots',
  links: [
    {
      name: 'Home',
      isLink: true,
      link: '/'
    },
    {
      name: 'Library',
      isLink: true,
      link: '/'
    },
    {
      name: 'Data',
      isLink: false
    }
  ]
};

// breadcrumb dashes
this.breadcrumbDashes = {
  type: 'dashes',
  links: [
    {
      name: 'Home',
      isLink: true,
      link: '/'
    },
    {
      name: 'Library',
      isLink: true,
      link: '/'
    },
    {
      name: 'Data',
      isLink: false
    }
  ]
};

// breadcrumb pipes
this.breadcrumbPipes = {
  type: 'pipes',
  links: [
    {
      name: 'Home',
      isLink: true,
      link: '/'
    },
    {
      name: 'Library',
      isLink: true,
      link: '/'
    },
    {
      name: 'Data',
      isLink: false
    }
  ]
};

// breadcrumb chevron
this.breadcrumbChevron = {
  type: 'chevron',
  links: [
    {
      name: 'Home',
      isLink: true,
      link: '/'
    },
    {
      name: 'Library',
      isLink: true,
      link: '/'
    },
    {
      name: 'Data',
      isLink: false
    }
  ]
};
`
};

export const snippetCodeAlignment: snippetCode = {
  html: `
  <!-- app-breadcrumbs component -->
  <app-breadcrumb [breadcrumb]="breadcrumbLeft"></app-breadcrumb>
  <div class="my-1">
    <app-breadcrumb [breadcrumb]="breadcrumbCenter"></app-breadcrumb>
  </div>
  <app-breadcrumb [breadcrumb]="breadcrumbRight"></app-breadcrumb>
  <!--/ app-breadcrumbs component -->
`,
  ts: `
// importing breadcrumb interface
import { Breadcrumb } from 'app/layout/components/content-header/breadcrumb/breadcrumb.component';

// public
public breadcrumbLeft: Breadcrumb;
public breadcrumbCenter: Breadcrumb;
public breadcrumbRight: Breadcrumb;

// breadcrumb left
this.breadcrumbLeft = {
  links: [
    {
      name: 'Home',
      isLink: true,
      link: '/'
    },
    {
      name: 'Library',
      isLink: true,
      link: '/'
    },
    {
      name: 'Data',
      isLink: false
    }
  ]
};

// breadcrumb center
this.breadcrumbCenter = {
  alignment: 'center',
  links: [
    {
      name: 'Home',
      isLink: true,
      link: '/'
    },
    {
      name: 'Library',
      isLink: true,
      link: '/'
    },
    {
      name: 'Data',
      isLink: false
    }
  ]
};

// breadcrumb right
this.breadcrumbRight = {
  alignment: 'right',
  links: [
    {
      name: 'Home',
      isLink: true,
      link: '/'
    },
    {
      name: 'Library',
      isLink: true,
      link: '/'
    },
    {
      name: 'Data',
      isLink: false
    }
  ]
};
`
};
