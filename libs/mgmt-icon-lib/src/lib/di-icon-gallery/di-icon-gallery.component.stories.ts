import { Meta, moduleMetadata } from '@storybook/angular';
import { DiIconGalleryComponent } from './di-icon-gallery.component';
import { DiIconComponent } from '../di-icon/di-icon.component';
export default {
  title: 'DiIconGallery',
  component: DiIconGalleryComponent,
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [DiIconGalleryComponent, DiIconComponent],
    }),
  ]
} as Meta<DiIconGalleryComponent>;

export const Icons = {
  render: (args: DiIconGalleryComponent) => {
    return ({
      props: args,
    });
  },
  args: {
  },
};
