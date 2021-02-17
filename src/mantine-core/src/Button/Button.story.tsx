import React from 'react';
import { storiesOf } from '@storybook/react';
import { ExternalLinkIcon, CalendarIcon } from '@modulz/radix-icons';
import { Calendar } from 'react-feather';
import { MantineProvider, MantineSize, DEFAULT_THEME } from '@mantine/theme';
import ElementsGroup from '../ElementsGroup/ElementsGroup';
import { Button, LinkButton } from './Button';

const colors = Object.keys(DEFAULT_THEME.colors).filter(
  (color) => color !== 'white' && color !== 'black'
);

const md = colors.map((theme) => (
  <LinkButton color={theme} key={theme} size="md" href="https://mantine.dev" target="_blank">
    {theme} md
  </LinkButton>
));

const sizes = (['xs', 'sm', 'md', 'lg', 'xl'] as MantineSize[]).map((size) => (
  <Button color="blue" key={size} size={size}>
    Button {size}
  </Button>
));

storiesOf('@mantine/core', module).add('Button', () => (
  <MantineProvider theme={{ fontFamily: "'IBM Plex Mono', monospace" }}>
    <ElementsGroup>
      <Button disabled>Disabled</Button>
      <Button radius="lg">With lg radius</Button>
      <Button size="xs" color="blue" radius="xl">
        xs with xl radius
      </Button>
      <Button color="blue" radius="xl" size="xl">
        XL With xl radius
      </Button>
    </ElementsGroup>

    <ElementsGroup style={{ marginTop: 10 }}>
      <Button>White (default)</Button>
      {md}
    </ElementsGroup>

    <ElementsGroup style={{ marginTop: 10 }}>{sizes}</ElementsGroup>
    <ElementsGroup style={{ marginTop: 10 }}>
      <Button color="blue" leftIcon={<Calendar size={16} />}>
        Book meeting
      </Button>

      <Button size="xl" color="blue" leftIcon={<CalendarIcon style={{ height: 22, width: 22 }} />}>
        Book meeting
      </Button>

      <Button disabled size="xl" color="blue" leftIcon={<CalendarIcon style={{ width: 18 }} />}>
        Book meeting
      </Button>

      <Button rightIcon={<ExternalLinkIcon style={{ width: 15 }} />}>Open in new tab</Button>
    </ElementsGroup>
  </MantineProvider>
));
