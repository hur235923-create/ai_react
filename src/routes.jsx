import ButtonPage         from './pages/input/ButtonPage'
import TextFieldPage      from './pages/input/TextFieldPage'
import SelectPage         from './pages/input/SelectPage'
import CheckboxSwitchPage from './pages/input/CheckboxSwitchPage'
import SliderPage         from './pages/input/SliderPage'
import TablePage          from './pages/display/TablePage'
import ListPage           from './pages/display/ListPage'
import CardPage           from './pages/display/CardPage'
import ChipPage           from './pages/display/ChipPage'
import AvatarPage         from './pages/display/AvatarPage'
import SnackbarPage       from './pages/feedback/SnackbarPage'
import DialogPage         from './pages/feedback/DialogPage'
import AlertPage          from './pages/feedback/AlertPage'
import ProgressPage       from './pages/feedback/ProgressPage'
import SkeletonPage       from './pages/feedback/SkeletonPage'
import TabsPage           from './pages/navigation/TabsPage'
import StepperPage        from './pages/navigation/StepperPage'
import BreadcrumbsPage    from './pages/navigation/BreadcrumbsPage'
import AccordionPage      from './pages/navigation/AccordionPage'
import PaginationPage     from './pages/navigation/PaginationPage'

export const NAV_GROUPS = [
  {
    label: '입력',
    items: [
      { label: 'Button',            path: '/components/button',          element: <ButtonPage /> },
      { label: 'TextField',         path: '/components/textfield',       element: <TextFieldPage /> },
      { label: 'Select',            path: '/components/select',          element: <SelectPage /> },
      { label: 'Checkbox & Switch', path: '/components/checkbox-switch', element: <CheckboxSwitchPage /> },
      { label: 'Slider',            path: '/components/slider',          element: <SliderPage /> },
    ],
  },
  {
    label: '표시',
    items: [
      { label: 'Table',  path: '/components/table',  element: <TablePage /> },
      { label: 'List',   path: '/components/list',   element: <ListPage /> },
      { label: 'Card',   path: '/components/card',   element: <CardPage /> },
      { label: 'Chip',   path: '/components/chip',   element: <ChipPage /> },
      { label: 'Avatar', path: '/components/avatar', element: <AvatarPage /> },
    ],
  },
  {
    label: '피드백',
    items: [
      { label: 'Snackbar', path: '/components/snackbar', element: <SnackbarPage /> },
      { label: 'Dialog',   path: '/components/dialog',   element: <DialogPage /> },
      { label: 'Alert',    path: '/components/alert',    element: <AlertPage /> },
      { label: 'Progress', path: '/components/progress', element: <ProgressPage /> },
      { label: 'Skeleton', path: '/components/skeleton', element: <SkeletonPage /> },
    ],
  },
  {
    label: '탐색',
    items: [
      { label: 'Tabs',        path: '/components/tabs',        element: <TabsPage /> },
      { label: 'Stepper',     path: '/components/stepper',     element: <StepperPage /> },
      { label: 'Breadcrumbs', path: '/components/breadcrumbs', element: <BreadcrumbsPage /> },
      { label: 'Accordion',   path: '/components/accordion',   element: <AccordionPage /> },
      { label: 'Pagination',  path: '/components/pagination',  element: <PaginationPage /> },
    ],
  },
]
