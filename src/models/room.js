import { Api } from "./api";

export class Room {
    constructor(id, hotel, number, type, price, description, image) {
        this.id = id;
        this.hotel = hotel;
        this.number = number;
        this.type = type;
        this.price = price;
        this.description = description;
        this.image = image;
    }

    static fromObject(obj) {
        return new Room(
            obj.id,
            obj.hotel,
            obj.number,
            obj.type,
            obj.price,
            obj.description,
            obj.image
        );
    }

    static fromArray(arr) {
        return arr.map(obj => Room.fromObject(obj));
    }

    static toArray(rooms) {
        return rooms.map(room => room.toObject());
    }

    toObject() {
        return {
            id: this.id,
            hotel: this.hotel,
            number: this.number,
            type: this.type,
            price: this.price,
            description: this.description,
            image: this.image
        };
    }

    static get_all = async () => {
        let datas = await Api.get("rooms", true);
        return Room.fromArray(datas.data.data);
    }

    static get_filtered = async (filter) => {
        let datas = await Api.get("rooms?" + filter, true);
        console.log(datas);
        return Room.fromArray(datas.data.data);
    }

    static get_by_id = async (id) => {
        let datas = await Api.get("rooms/" + id, true);
        return Room.fromObject(datas.data.data);
    }

}