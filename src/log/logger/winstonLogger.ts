import { date } from '@hapi/joi';
import { timestamp } from 'rxjs';
import { createLogger, format, level, transports } from 'winston';
import getLogLevels from './getLogLevels';


export const logger = createLogger({
   
    transports: [

        new transports.File({ 
            filename: `${'.'}/logs/log.log`,
            level: 'info',
            format: format.combine(
                
                   // format.timestamp({format: 'MMM-DD-YYYY HH:mm:ss'}),
                    // format.json(), 
                )  
        }),

        new transports.File({ 
            filename: `${'.'}/logs/log-error.log`,
            level: 'error',
            format: format.combine(
                
                // format.timestamp({format: 'MMM-DD-YYYY HH:mm:ss'}),
                 // format.json(), 
             )  
        }),
    ]
})


//  // old logger
// export const logger1 = createLogger({
//   level: 'info',
//   exitOnError: false,
//   format: format.combine( 
                // format.timestamp({format: 'MMM-DD-YYYY HH:mm:ss'}),
                // format.json(),
                // format.metadata({
                // fillExcept: ['message', 'level', 'timestamp', 'label']
                // }),

            //   format.printf((info) => {
            //     // const reqId = info.metadata.reqId;
            //     // delete info.metadata.reqId;

            //     return (`${info.level} | ${info.timestamp}  | ${info.message} | ${JSON.stringify(info.metadata)}`);
            //   })

//                     ),
//   transports: [
//     new transports.File({ filename: `${'.'}/logs/log.log` }),
//   ],
// })
