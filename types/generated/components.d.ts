import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksBanner extends Struct.ComponentSchema {
  collectionName: 'components_blocks_banners';
  info: {
    displayName: 'Banner';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    type: Schema.Attribute.Enumeration<['IMAGE', 'VIDEO']>;
    video: Schema.Attribute.Media<'videos'>;
  };
}

export interface BlocksCardGrid extends Struct.ComponentSchema {
  collectionName: 'components_blocks_card_grids';
  info: {
    displayName: 'Card Grid';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.card', true>;
    section_type: Schema.Attribute.Enumeration<
      ['applications', 'support', 'performance', 'power']
    >;
  };
}

export interface BlocksGuarantee extends Struct.ComponentSchema {
  collectionName: 'components_blocks_guarantees';
  info: {
    displayName: 'Guarantee';
  };
  attributes: {
    badge_text: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    heading_highlight: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.Component<'shared.link', false>;
    list: Schema.Attribute.Component<'shared.list', true>;
    stats: Schema.Attribute.Component<'shared.stat-item', true>;
    sub_heading: Schema.Attribute.String;
  };
}

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    badge: Schema.Attribute.String;
    description: Schema.Attribute.RichText;
    heading_highlight: Schema.Attribute.String;
    heading_prefix: Schema.Attribute.String;
    info_card: Schema.Attribute.Component<'shared.info-card', false>;
    links: Schema.Attribute.Component<'shared.link', true>;
    stats: Schema.Attribute.Component<'shared.stat-item', true>;
    sub_heading: Schema.Attribute.String;
    text: Schema.Attribute.String;
    video: Schema.Attribute.Media<'videos'>;
  };
}

export interface BlocksMarkdown extends Struct.ComponentSchema {
  collectionName: 'components_blocks_markdowns';
  info: {
    displayName: 'Markdown';
  };
  attributes: {
    banner: Schema.Attribute.Component<'blocks.banner', false>;
    content: Schema.Attribute.RichText;
    heading: Schema.Attribute.Component<'blocks.section-heading', false>;
    link: Schema.Attribute.Component<'shared.link', false>;
  };
}

export interface BlocksSectionHeading extends Struct.ComponentSchema {
  collectionName: 'components_blocks_section_headings';
  info: {
    displayName: 'Section Heading';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    heading: Schema.Attribute.String;
    sub_heading: Schema.Attribute.String;
  };
}

export interface BlocksServices extends Struct.ComponentSchema {
  collectionName: 'components_blocks_services';
  info: {
    displayName: 'Services';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.Component<'shared.link', false>;
    sub_heading: Schema.Attribute.String;
    text: Schema.Attribute.RichText;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    companyText: Schema.Attribute.String;
    contactLinks: Schema.Attribute.Component<'shared.logo-link', true>;
    copyrighttext: Schema.Attribute.Text;
    description: Schema.Attribute.Text;
    list: Schema.Attribute.Component<'shared.list', true>;
    logo: Schema.Attribute.Component<'shared.logo-link', false>;
    navitems: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    logo: Schema.Attribute.Component<'shared.logo-link', false>;
    navitems: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface LayoutTopNav extends Struct.ComponentSchema {
  collectionName: 'components_layout_top_navs';
  info: {
    displayName: 'Top Nav';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.link', false>;
    socialLinks: Schema.Attribute.Component<'shared.logo-link', true>;
  };
}

export interface SharedCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images'>;
    slug: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedInfoCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_info_cards';
  info: {
    displayName: 'Info Card';
  };
  attributes: {
    badge_text: Schema.Attribute.String;
    description: Schema.Attribute.RichText;
    link: Schema.Attribute.Component<'shared.link', false>;
    title: Schema.Attribute.String;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isButtonLink: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['PRIMARY', 'SECONDARY']>;
  };
}

export interface SharedList extends Struct.ComponentSchema {
  collectionName: 'components_shared_lists';
  info: {
    displayName: 'List';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface SharedLogoLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_logo_links';
  info: {
    displayName: 'Logo Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
  };
}

export interface SharedStatItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_stat_items';
  info: {
    displayName: 'Stat Item';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.banner': BlocksBanner;
      'blocks.card-grid': BlocksCardGrid;
      'blocks.guarantee': BlocksGuarantee;
      'blocks.hero': BlocksHero;
      'blocks.markdown': BlocksMarkdown;
      'blocks.section-heading': BlocksSectionHeading;
      'blocks.services': BlocksServices;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'layout.top-nav': LayoutTopNav;
      'shared.card': SharedCard;
      'shared.info-card': SharedInfoCard;
      'shared.link': SharedLink;
      'shared.list': SharedList;
      'shared.logo-link': SharedLogoLink;
      'shared.stat-item': SharedStatItem;
    }
  }
}
