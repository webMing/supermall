
/**
 * 查看默认配置可以通过 vue inspect > output.js; eg alias 默认配置
 */
module.exports = {
    chainWebpack: config => {
        config.resolve.alias
        // src已经设置过,不再进行设置 '@': '/Users/stephanie/Desktop/supermall/src',
        .set('components','@/components')
        .set('common','@/common')
        .set('assets','@/assets')
        .set('network','@/network')
        .set('views','@/views')
    
      }
}