import type { BrowserWindow, MenuItemConstructorOptions } from "electron";

import { toggleEnabled } from "@plugins/utils";

function pluginMenu(win: BrowserWindow): MenuItemConstructorOptions {
	// Default menu
	return {
		label: "pluginName",
		type: "checkbox",
		checked: false,
		enabled: false,
	};
}
export default pluginMenu;
