/**
 * @license GNU General Public License v3.0
 * @description A Scriptable script to use Apora on iOS/iPad devices.
 * @link https://github.com/0x0501/Apora-scriptable
 * @author: 0x0501
 */

/**
 * @type {{data: string, config: string}}
 */
const input = args.shortcutParameter;

/**
 * @type {import("./part-3").ConfigType}
 */
const config = JSON.parse(input.config);

const strArray = config.language === "jp" || config.language === "japanese"
	? input.data.split("")
	: input.data.split(" ");

const remove_specials = strArray
	.map((i) => i.replace(/[.,?"]+/gi, ""))
	.filter((i) => i !== "");

Script.setShortcutOutput(remove_specials.join(" "));
Script.complete();
