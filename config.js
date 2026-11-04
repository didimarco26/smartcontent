/**
 * Smart Content 智能内容工作台 · 运行时配置
 * ---------------------------------------------------------------
 * 部署到豆包工作台后，只需把本文件中的 faasUrl 改为云函数访问地址，
 * 刷新即生效，无需重新执行 npm run build。
 *
 * 优先级：本文件(window.__SC_CONFIG__) > 构建期 VITE_FAAS_URL > 代码兜底(原妙笔地址)
 */
window.__SC_CONFIG__ = {
  // Smart Content 专属云函数（三风格脚本：常规达人 / 红果剧情 / AIGC 爆款）
  faasUrl: 'https://magic.solutionsuite.cn/api/faas/zz28VRfvaP6t2'
};
