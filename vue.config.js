/**
 * 查看默认配置可以通过 vue inspect > output.js; eg alias 默认配置
 */
// 修改webpack配置 https://blog.csdn.net/Run_youngman/article/details/104449752
module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      // src已经设置过,不再进行设置 '@': '/Users/stephanie/Desktop/supermall/src',
      .set("components", "@/components")
      .set("common", "@/common")
      .set("assets", "@/assets")
      .set("network", "@/network")
      .set("views", "@/views");
    config.plugin("html").tap(args => {
      args[0].title = "风范工厂";
      // args[0].template = '/Users/username/proj/app/templates/index.html'
      // https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-plugin
      return args;
    });
  },
  devServer: {
    open: true,
    port: 8081
  }
};
