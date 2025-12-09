/**
 * @license GNU General Public License v3.0
 * @description A Scriptable script to use Apora on iOS/iPad devices.
 * @link https://github.com/0x0501/Apora-scriptable
 * @author: 0x0501
 */

/**
 * @type {import("./part-3").ConfigType}
 */
const input = args.shortcutParameter;

const isHans = input.language === "jp" || input.language === "japanese";

Script.setShortcutOutput(isHans);
Script.complete();
