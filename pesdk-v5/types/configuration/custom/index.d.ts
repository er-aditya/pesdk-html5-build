import { CustomLanguages } from './language';
import { CustomThemes } from './theme';
import { CustomCard } from '../../components/advanced/card';
import { CustomAdvancedToolbarItem } from '../../components/advanced/toolbarItem';
import { CustomLoader } from '../../components/base/loader';
import { CustomButtons } from '../../components/base/buttons';
import { CustomColorItem } from '../../components/base/color/colorItem';
import { CustomMeasurements } from './measurements';
import { CustomCheckbox } from '../../components/base/checkbox/checkbox';
export interface CustomComponents {
    /**
     * advancedUICategoryCard will receive CustomCardProps
     */
    advancedUICategoryCard?: CustomCard;
    /**
     * advancedUIItemCard will receive CustomCardProps
     */
    advancedUIItemCard?: CustomCard;
    /**
     * toolbarItem will receive CustomToolbarItemProps
     */
    advancedUIToolbarItem?: CustomAdvancedToolbarItem;
    /**
     * loader will receive CustomLoaderProps
     */
    loader?: CustomLoader;
    /**
     * buttons will receive CustomButtonProps
     */
    buttons?: CustomButtons;
    /**
     * color item will receive CustomColorItemProps
     */
    colorItem?: CustomColorItem;
    /**
     * checkbox will receive CustomCheckboxProps
     */
    checkbox?: CustomCheckbox;
}
export interface CustomConfiguration {
    /**
     * New language locale
     * eg: languages: { es: {...} }
     * In case one wants to override only a certain lables
     * eg: { de: { filter: { controls: { buttonReset: 'Zurücksetzen' } } } }
     */
    languages?: CustomLanguages;
    /**
     * Theming options to change the user interface appearance. This allows to alter predefined existing
     * theme presets or to create new themes which can be enabled when their corresponding key (name)
     * is set as the `Configuration.theme`.
     * New theme
     * eg: theme: { pink: {...} }
     * In case one wants to override only a certain attributes
     * eg: { dark: { toolControlBar: { border: '#FFFFFF' } } }
     */
    themes?: CustomThemes;
    /**
     * Option to change the width or height of certain UI elements. e.g. Toolbar or CanvasBar
     * eg: { advancedToolbar: { width: 64 } }
     */
    measurements?: CustomMeasurements;
    /** Cards and toolbarItem supported only in Advanced UI, loader is supported in both UIs */
    components?: CustomComponents;
}
