import React from 'react';


// 创建类型接口
export interface IProps {
    value ?: number,
    onIncrement ?: () => void,
    onDecrement ?: () => void
}

// 使用接口代替 PropTypes 进行类型校验
// const Counter = ({ value }: Iprops) => {
//     return <p>Clicked: { value } times</p>
// }

// export default Counter;


// 使用接口代替 PropTypes 进行类型校验
export default class Counter extends React.Component<IProps> {
  public render() {
    return (
        <p>
          这是组件
        </p>
    )
  }
}
