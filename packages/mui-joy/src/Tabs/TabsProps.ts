import * as React from 'react';
import { OverridableStringUnion, OverrideProps } from '@mui/types';
import { TabsUnstyledOwnProps } from '@mui/base/TabsUnstyled';
import { ColorPaletteProp, SxProps, VariantProp, ApplyColorInversion } from '../styles/types';

export type TabsSlot = 'root';

export interface TabsPropsColorOverrides {}

export interface TabsPropsVariantOverrides {}

export interface TabsPropsSizeOverrides {}

export interface TabsTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P &
    Omit<TabsUnstyledOwnProps, 'slots' | 'slotProps'> & {
      /**
       * The color of the component. It supports those theme colors that make sense for this component.
       * @default 'neutral'
       */
      color?: OverridableStringUnion<ColorPaletteProp, TabsPropsColorOverrides>;
      /**
       * The size of the component.
       * @default 'md'
       */
      size?: OverridableStringUnion<'sm' | 'md' | 'lg', TabsPropsSizeOverrides>;
      /**
       * The system prop that allows defining system overrides as well as additional CSS styles.
       */
      sx?: SxProps;
      /**
       * The variant to use.
       * @default 'plain'
       */
      variant?: OverridableStringUnion<VariantProp, TabsPropsVariantOverrides>;
    };
  defaultComponent: D;
}

export type TabsProps<
  D extends React.ElementType = TabsTypeMap['defaultComponent'],
  P = { component?: React.ElementType },
> = OverrideProps<TabsTypeMap<P, D>, D>;

export interface TabsOwnerState extends ApplyColorInversion<TabsProps> {}
