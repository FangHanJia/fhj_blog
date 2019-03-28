const getters = {
    githubUsername: state => state.configuration.githubUsername,
    blogTitle: state => state.configuration.blogTitle,
    blogDescribe: state => state.configuration.blogDescribe,
    htmlTitle: state => state.configuration.htmlTitle,
    fontColor: state => state.configuration.fontColor,
    useBackgroundImage: state => state.configuration.useBackgroundImage,
    backgroundColorLeft: state => state.configuration.backgroundColorLeft,
    backgroundColorRight: state => state.configuration.backgroundColorRight,
    audioUrl: state => state.configuration.audioUrl,
    mini: state => state.configuration.mini,
    audioAutoPlay: state => state.configuration.audioAutoPlay,
    webSite: state => state.configuration.webSite,
    audioUrl: state => state.configuration.audioUrl,
}
export default getters;