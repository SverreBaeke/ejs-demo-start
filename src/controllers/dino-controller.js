import { dinosaurs, navItems } from "../data/data.js";

export const index = (req, res) => {
    res.render('pages/dinosaurs', {
        dinosaurs,
        navItems
    } )
};

export const detail = (req,res) => {
    const slug = req.params.slug;
    const dino = dinosaurs.find((dinosaur) => dinosaur.slug === slug);

    res.render('pages/detail', {
        dino,
        navItems
    })

}