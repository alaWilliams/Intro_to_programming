// Countdown
// Print out numbers from 10 to 0 using a while loop.

process.stdout.write('\n10 seconds to ignition... Starting countdown...\n')
let countdown = 10;
while (countdown >= 0) {
 process.stdout.write('\n...' + countdown + '...')
 countdown = --countdown;
}

process.stdout.write('\nIGNITION!!!\n')
