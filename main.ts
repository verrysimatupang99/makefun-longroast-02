const LINE =
  'Your codebase is like a haunted house: everyone who enters comes out screaming about the previous tenant.';

function renderLine(shout: boolean): string {
  return shout ? LINE.toUpperCase() : LINE;
}

function hasFlag(name: string): boolean {
  return process.argv.slice(2).includes(name);
}

function parseArgs(argv: string[]): { shout: boolean; help: boolean } {
  const shout = argv.includes('--shout');
  const help = argv.includes('--help') || argv.includes('-h');
  return { shout, help };
}

function usage(): void {
  console.error('Usage: node main.ts [--shout]');
  console.error('');
  console.error('Options:');
  console.error('  --shout   Print the line in ALL CAPS');
  console.error('  --help    Show this help text');
}

function main(argv: string[] = process.argv.slice(2)): void {
  const args = parseArgs(argv);
  if (args.help) {
    usage();
    process.exit(0);
  }
  console.log(renderLine(hasFlag('--shout')));
}

main();
