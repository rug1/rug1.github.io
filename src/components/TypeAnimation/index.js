import React from "react"

import checkIfTabIsActive from "../../utils/checkIfTabIsActive"
import { HeroH1, HeroH2, Cursor } from "../../styles/pages/home"

class TypeAnimation extends React.Component {
  state = { typeAnimationText: "", typeAnimationLineCount: 0 }

  componentDidMount() {
    const startTypeAnimation = this.typeAnimation(this.props.text[0])
    checkIfTabIsActive(startTypeAnimation)
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.typeAnimationLineCount !== this.state.typeAnimationLineCount &&
      this.props.text.length !== this.state.typeAnimationLineCount
    ) {
      this.typeAnimation(this.props.text[this.state.typeAnimationLineCount])
    }
  }

  typeAnimation = text => {
    const { typeAnimationText, typeAnimationLineCount } = this.state
    if (typeAnimationText.length !== text.length) {
      setTimeout(() => {
        this.setState({
          typeAnimationText: text.substring(0, typeAnimationText.length + 1),
        })
        this.typeAnimation(text, typeAnimationText.length + 1)
      }, 75)
    } else {
      setTimeout(() => {
        this.setState({
          typeAnimationText: "",
          typeAnimationLineCount: typeAnimationLineCount + 1,
        })
      }, 1000)
    }
  }

  renderText = lineNumber => {
    const { typeAnimationLineCount, typeAnimationText } = this.state

    return typeAnimationLineCount === lineNumber
      ? typeAnimationText
      : this.props.text[lineNumber]
  }

  render() {
    const { typeAnimationLineCount } = this.state
    return (
      <React.Fragment>
        <div>
          <HeroH1>{this.renderText(0)}</HeroH1>
          {typeAnimationLineCount === 0 && <Cursor big>|</Cursor>}
        </div>

        {typeAnimationLineCount >= 1 && (
          <div>
            <HeroH2>{this.renderText(1)}</HeroH2>
            {typeAnimationLineCount === 1 && <Cursor>|</Cursor>}
          </div>
        )}

        {typeAnimationLineCount >= 2 && (
          <div>
            <HeroH2>{this.renderText(2)}</HeroH2>
            {typeAnimationLineCount === 2 && <Cursor>|</Cursor>}
          </div>
        )}
      </React.Fragment>
    )
  }
}

export default TypeAnimation
