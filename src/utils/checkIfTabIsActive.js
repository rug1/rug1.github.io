const checkIfTabIsActive = functionToRun => {
  // Set the name of the hidden property and the change event for visibility
  let hidden, visibilityChange
  if (typeof document.hidden !== "undefined") {
    // Opera 12.10 and Firefox 18 and later support
    hidden = "hidden"
    visibilityChange = "visibilitychange"
  } else if (typeof document.msHidden !== "undefined") {
    hidden = "msHidden"
    visibilityChange = "msvisibilitychange"
  } else if (typeof document.webkitHidden !== "undefined") {
    hidden = "webkitHidden"
    visibilityChange = "webkitvisibilitychange"
  }

  const handleVisibilityChange = () => {
    if (functionToRun && !document[hidden]) {
      functionToRun()
    }
  }

  if (
    typeof document.addEventListener === "undefined" ||
    hidden === undefined
  ) {
    console.log("Requires a browser that supports the Page Visibility API.")
  } else {
    // Handle page visibility change
    document.addEventListener(visibilityChange, handleVisibilityChange, false)
  }
}

export default checkIfTabIsActive
