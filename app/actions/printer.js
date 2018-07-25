// @flow
import Bonjour from 'bonjour';
// import snmp from 'net-snmp';
// import type { printerStateType } from '../reducers/printers';

type actionType = {
  +type: string
};

export const ADD_NETWORK_PRINTER = 'ADD_NETWORK_PRINTER';
export const REMOVE_ALL_PRINTER = 'REMOVE_ALL_PRINTER';
export const TOGGLE_PRINTER_DETAILS = 'TOGGLE_PRINTER_DETAILS';

export function startBonjour() {
  return (
    dispatch: (action: actionType) => void
    // getState: () => printerStateType
  ) => {
    dispatch(removeAllPrinter());
    // const { printers } = getState();

    const bonjour = Bonjour();
    bonjour.find({ type: 'printer' }, service => {
      // console.log(service);
      dispatch(addNetworkPrinter(service));
    });
  };
}

export function addNetworkPrinter(Service) {
  return {
    service: Service,
    type: ADD_NETWORK_PRINTER
  };
}

export function removeAllPrinter() {
  return {
    type: REMOVE_ALL_PRINTER
  };
}

// export function getPrinterDetails(IPv4) {
//   return (
//     dispatch: (action: actionType) => void
//     // getState: () => printerStateType
//   ) => {
//     // dispatch(removeAllPrinter());
//     // const { printers } = getState();

//     const session = snmp.createSession(IPv4, 'public');

//     const oids = [
//       '1.3.6.1.2.1.1.1.0',
//       '1.3.6.1.2.1.1.5.0',
//       '1.3.6.1.2.1.1.6.0'
//     ];

//     session.get(oids, (error, varbinds) => {
//       if (error) {
//         console.error(error);
//       } else {
//         for (let i = 0; i < varbinds.length; i += 1)
//           if (snmp.isVarbindError(varbinds[i]))
//             console.error(snmp.varbindError(varbinds[i]));
//         // else console.log(`${varbinds[i].oid} = ${varbinds[i].value}`);
//       }
//       // console.log(varbinds);
//       dispatch(addPrinterDetails(IPv4, varbinds));
//       // If done, close the session
//       session.close();
//     });

//     session.trap(snmp.TrapType.LinkDown, error => {
//       if (error) console.error(error);
//     });
//   };
// }

// export function addPrinterDetails(IPv4, Details) {
//   return {
//     ipv4: IPv4,
//     details: Details,
//     type: ADD_PRINTER_DETAILS
//   };
// }

export function togglePrinterDetails(IPv4: string) {
  return {
    ipv4: IPv4,
    type: TOGGLE_PRINTER_DETAILS
  };
}
