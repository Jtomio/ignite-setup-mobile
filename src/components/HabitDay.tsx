import { TouchableOpacity, Dimensions, TouchableOpacityProps } from 'react-native'

const week_Days = 7;
const screen_Horizontal_Padding = (32 * 2) / 5;

export const day_Margin_Between = 8;
export const day_Size = (Dimensions.get('screen').width / week_Days) - (screen_Horizontal_Padding + 5)

interface Props extends TouchableOpacityProps { }

export function HabitDay({ ...rest }: Props) {
  return (
    <TouchableOpacity
      className='bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800'
      style={{ width: day_Size, height: day_Size }}
      activeOpacity={0.7}
      {...rest}
    />
  )
}