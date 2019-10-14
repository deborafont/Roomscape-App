
export class RoomScapes {
    name: string;
    direction: string;
    latitude: number;
    longitude: number;
    image:[string];
    // link: string;
    rooms: {
        roomname: string;
        roomimage:[string];
        theme: string;
        minplayers: number;
        maxplayers: number;
        time: number;
        link: string;
    }[];
}
