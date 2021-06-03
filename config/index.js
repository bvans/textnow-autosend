module.exports = {
  username: process.env.TEXTNOW_USERNAME || "",
  password: process.env.TEXTNOW_PASSWORD || "",
  recipient: process.env.TEXTNOW_RECIPIENT || "(726) 666-0002",
  message: process.env.TEXTNOW_MESSAGE || "autosend message",
  urls: process.env.AUTL_VISIT_URLS || "https://test-1c998b-1251225310.ap-shanghai.app.tcloudbase.com/thread/2",
};
