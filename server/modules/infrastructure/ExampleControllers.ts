import { ExampleServices } from "../application/ExampleServices.js";
import { Request, Response } from "express";

export class ExampleControllers {
    constructor ( private readonly exampleServices: ExampleServices ) {}

    test = async (req: Request, res: Response) => {
        try {
            const records = await this.exampleServices.test();

            console.log("Testing live updates in the controller!")
            res.status(200).json( records )
        } catch (error : any) {
            console.log(error)
        }
    }

    crear = async (req: Request, res: Response) => {
        try {
            await this.exampleServices.crear();
            res.status(201).send();
        } catch (error : any) {
            console.error(error)
        }
    }
}