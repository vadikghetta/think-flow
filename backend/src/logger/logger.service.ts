/* eslint-disable no-console */
import chalk from "chalk";

class Logger {
	private jsonOutput = false;

	setJsonOutput(enabled: boolean) {
		this.jsonOutput = enabled;
	}

	private getTimestamp(): string {
		return chalk.green(`[${new Date().toISOString().replace("T", " ").split(".")[0]}]`);
	}

	// Выровненный и цветной уровень лога
	private formatLevel(level: string): string {
		const paddedLevel = level.toUpperCase().padEnd(5); // например, "INFO "
		switch (level.toLowerCase()) {
			case "info":
				return chalk.bgBlueBright.black(` ${paddedLevel} `);
			case "warn":
				return chalk.bgYellowBright.black(` ${paddedLevel} `);
			case "error":
				return chalk.bgRedBright.white(` ${paddedLevel} `);
			case "debug":
				return chalk.bgMagentaBright.black(` ${paddedLevel} `);
			default:
				return chalk.bgWhite.black(` ${paddedLevel} `);
		}
	}

	private getLogObject(level: string, args: unknown[]) {
		return {
			timestamp: new Date().toISOString(),
			level,
			message: args.map((arg) => (typeof arg === "string" ? arg : JSON.stringify(arg, null, 2))).join(" ")
		};
	}

	log(...args: unknown[]) {
		if (this.jsonOutput) {
			console.log(JSON.stringify(this.getLogObject("INFO", args)));
		} else {
			console.log(this.getTimestamp(), this.formatLevel("info"), ...args);
		}
	}

	warn(...args: unknown[]) {
		if (this.jsonOutput) {
			console.warn(JSON.stringify(this.getLogObject("WARN", args)));
		} else {
			console.warn(this.getTimestamp(), this.formatLevel("warn"), ...args);
		}
	}

	error(...args: unknown[]) {
		if (this.jsonOutput) {
			console.error(JSON.stringify(this.getLogObject("ERROR", args)));
		} else {
			console.error(this.getTimestamp(), this.formatLevel("error"), ...args);
		}
	}

	debug(...args: unknown[]) {
		if (this.jsonOutput) {
			console.debug(JSON.stringify(this.getLogObject("DEBUG", args)));
		} else {
			console.debug(this.getTimestamp(), this.formatLevel("debug"), ...args);
		}
	}
}

export default new Logger();

// // Переключаемся на JSON вывод
// logger.setJsonOutput(true);

// logger.log("Server started", { port: 8080 });
// logger.error("Ошибка с объектом", { code: 500, message: "Internal error" });
