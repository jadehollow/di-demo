import { Meta, moduleMetadata } from '@storybook/angular';
import { ControlMode, TreeViewComponent, TreeViewItemSumPipe } from './tree-view.component';
import { CommonModule } from '@angular/common';
import { DxTreeViewModule } from 'devextreme-angular';
import { MgmtIconLibModule } from '@mgmt-icon-lib';
import { BadgeComponentModule } from '../badge/badge.component';

const testTree = [{
  id: '1',
  text: 'Level 1',
  expanded: true,
  items: [{
    id: '2',
    text: 'Level 2',
    expanded: true,
    items: [{
      id: '3',
      text: 'Level 3',
      items: [{
        id: '4',
        text: 'Level 4',
        items: [{
          id: '5',
          text: 'Level 5',
          items: [{
            id: '6',
            text: 'Level 6',
            items: [{
              id: '7',
              text: 'Level 7',
            }]
          }]
        }]
      }]
    }]
  }]
}];

const iconTree = [{
  id: '1',
  text: 'Level 1',
  expanded: true,
  icon: 'add',
  items: [{
    id: '2',
    text: 'Level 2',
    expanded: true,
    icon: 'add',
    items: [{
      id: '3',
      text: 'Level 3',
      icon: 'add',
      items: [{
        id: '4',
        text: 'Level 4',
        icon: 'add',
        items: [{
          id: '5',
          text: 'Level 5',
          icon: 'add',
          items: [{
            id: '6',
            text: 'Level 6',
            icon: 'add',
            items: [{
              id: '7',
              text: 'Level 7',
              icon: 'add',
            }]
          }]
        }]
      }]
    }]
  }]
}];

const bigTree = [{
  id: '1',
  text: 'Stores',
  expanded: true,
  icon: 'add',
  items: [{
    id: '1_1',
    text: 'Super Mart of the West',
    expanded: true,
    items: [{
      id: '1_1_1',
      text: 'Video Players',
      items: [{
        id: '1_1_1_1',
        text: 'HD Video Player',
        badge: 220,
        image: 'images/products/1.png',
      }, {
        id: '1_1_1_2',
        text: 'SuperHD Video Player',
        image: 'images/products/2.png',
        badge: 270,
        icon: 'add',
      }],
    }, {
      id: '1_1_2',
      text: 'Televisions',
      expanded: true,
      items: [{
        id: '1_1_2_1',
        text: 'SuperLCD 42',
        image: 'images/products/7.png',
        badge: 1200,
      }, {
        id: '1_1_2_2',
        text: 'SuperLED 42',
        image: 'images/products/5.png',
        badge: 1450,
      }, {
        id: '1_1_2_3',
        text: 'SuperLED 50',
        image: 'images/products/4.png',
        badge: 1600,
      }, {
        id: '1_1_2_4',
        text: 'SuperLCD 55',
        image: 'images/products/6.png',
        badge: 1350,
      }, {
        id: '1_1_2_5',
        text: 'SuperLCD 70',
        image: 'images/products/9.png',
        badge: 4000,
      }],
    }, {
      id: '1_1_3',
      text: 'Monitors',
      expanded: true,
      badge: 2000,
      items: [{
        id: '1_1_3_1',
        text: '19"',
        expanded: true,
        items: [{
          id: '1_1_3_1_1',
          text: 'DesktopLCD 19',
          image: 'images/products/10.png',
          badge: 160,
        }],
      }, {
        id: '1_1_3_2',
        text: '21"',
        items: [{
          id: '1_1_3_2_1',
          text: 'DesktopLCD 21',
          image: 'images/products/12.png',
          badge: 170,
        }, {
          id: '1_1_3_2_2',
          text: 'DesktopLED 21',
          image: 'images/products/13.png',
          badge: 175,
        }],
      }],
    }, {
      id: '1_1_4',
      text: 'Projectors',
      items: [{
        id: '1_1_4_1',
        text: 'Projector Plus',
        image: 'images/products/14.png',
        badge: 550,
      }, {
        id: '1_1_4_2',
        text: 'Projector PlusHD',
        image: 'images/products/15.png',
        badge: 750,
      }],
    }],

  }, {
    id: '1_2',
    text: 'Braeburn',
    items: [{
      id: '1_2_1',
      text: 'Video Players',
      items: [{
        id: '1_2_1_1',
        text: 'HD Video Player',
        image: 'images/products/1.png',
        badge: 240,
      }, {
        id: '1_2_1_2',
        text: 'SuperHD Video Player',
        image: 'images/products/2.png',
        badge: 300,
      }],
    }, {
      id: '1_2_2',
      text: 'Televisions',
      items: [{
        id: '1_2_2_1',
        text: 'SuperPlasma 50',
        image: 'images/products/3.png',
        badge: 1800,
      }, {
        id: '1_2_2_2',
        text: 'SuperPlasma 65',
        image: 'images/products/8.png',
        badge: 3500,
      }],
    }, {
      id: '1_2_3',
      text: 'Monitors',
      items: [{
        id: '1_2_3_1',
        text: '19"',
        items: [{
          id: '1_2_3_1_1',
          text: 'DesktopLCD 19',
          image: 'images/products/10.png',
          badge: 170,
        }],
      }, {
        id: '1_2_3_2',
        text: '21"',
        items: [{
          id: '1_2_3_2_1',
          text: 'DesktopLCD 21',
          image: 'images/products/12.png',
          badge: 180,
        }, {
          id: '1_2_3_2_2',
          text: 'DesktopLED 21',
          image: 'images/products/13.png',
          badge: 190,
        }],
      }],
    }],

  }, {
    id: '1_3',
    text: 'E-Mart',
    items: [{
      id: '1_3_1',
      text: 'Video Players',
      items: [{
        id: '1_3_1_1',
        text: 'HD Video Player',
        image: 'images/products/1.png',
        badge: 220,
      }, {
        id: '1_3_1_2',
        text: 'SuperHD Video Player',
        image: 'images/products/2.png',
        badge: 275,
      }],
    }, {
      id: '1_3_3',
      text: 'Monitors',
      items: [{
        id: '1_3_3_1',
        text: '19"',
        items: [{
          id: '1_3_3_1_1',
          text: 'DesktopLCD 19',
          image: 'images/products/10.png',
          badge: 165,
        }],
      }, {
        id: '1_3_3_2',
        text: '21"',
        items: [{
          id: '1_3_3_2_1',
          text: 'DesktopLCD 21',
          image: 'images/products/12.png',
          badge: 175,
        }],
      }],
    }],
  }, {
    id: '1_4',
    text: 'Walters',
    items: [{
      id: '1_4_1',
      text: 'Video Players',
      items: [{
        id: '1_4_1_1',
        text: 'HD Video Player',
        image: 'images/products/1.png',
        badge: 210,
      }, {
        id: '1_4_1_2',
        text: 'SuperHD Video Player',
        image: 'images/products/2.png',
        badge: 250,
      }],
    }, {
      id: '1_4_2',
      text: 'Televisions',
      items: [{
        id: '1_4_2_1',
        text: 'SuperLCD 42',
        image: 'images/products/7.png',
        badge: 1100,
      }, {
        id: '1_4_2_2',
        text: 'SuperLED 42',
        image: 'images/products/5.png',
        badge: 1400,
      }, {
        id: '1_4_2_3',
        text: 'SuperLED 50',
        image: 'images/products/4.png',
        badge: 1500,
      }, {
        id: '1_4_2_4',
        text: 'SuperLCD 55',
        image: 'images/products/6.png',
        badge: 1300,
      }, {
        id: '1_4_2_5',
        text: 'SuperLCD 70',
        image: 'images/products/9.png',
        badge: 4000,
      }, {
        id: '1_4_2_6',
        text: 'SuperPlasma 50',
        image: 'images/products/3.png',
        badge: 1700,
      }],
    }, {
      id: '1_4_3',
      text: 'Monitors',
      items: [{
        id: '1_4_3_1',
        text: '19"',
        items: [{
          id: '1_4_3_1_1',
          text: 'DesktopLCD 19',
          image: 'images/products/10.png',
          badge: 160,
        }],
      }, {
        id: '1_4_3_2',
        text: '21"',
        items: [{
          id: '1_4_3_2_1',
          text: 'DesktopLCD 21',
          image: 'images/products/12.png',
          badge: 170,
        }, {
          id: '1_4_3_2_2',
          text: 'DesktopLED 21',
          image: 'images/products/13.png',
          badge: 180,
        }],
      }],
    }, {
      id: '1_4_4',
      text: 'Projectors',
      items: [{
        id: '1_4_4_1',
        text: 'Projector Plus',
        image: 'images/products/14.png',
        badge: 550,
      }, {
        id: '1_4_4_2',
        text: 'Projector PlusHD',
        image: 'images/products/15.png',
        badge: 750,
      }],
    }],

  }],
}];

export default {
  title: 'TreeViewComponent',
  component: TreeViewComponent,
  decorators: [
    moduleMetadata({
      declarations: [ TreeViewComponent, TreeViewItemSumPipe ],
      imports: [ CommonModule, DxTreeViewModule, MgmtIconLibModule, BadgeComponentModule ],
    })
  ],
  args: {
    items: testTree,
    width: '300px',
    height: '300px'
  }
} as Meta<TreeViewComponent>;

export const Primary = {
  args: {
    title: 'Simple example',
    controlMode: ControlMode.ACCESS
  },
};

export const Icons = {
  args: {
    title: 'Icons example',
    controlMode: ControlMode.ACCESS,
    items: iconTree
  }
}

export const BigTree = {
  args: {
    title: 'Really big tree example',
    controlMode: ControlMode.MINIMAL,
    items: bigTree
  }
}

export const Dropdown = {
  args: {
    title: 'Dropdown example',
    controlMode: ControlMode.DROPDOWN,
    items: bigTree
  }
}