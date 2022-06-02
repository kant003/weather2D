const windRanges = {21:'Calma', 40:'Moderada', 70:'Fuerte', 120:'Muy alto',999:'Extremo'}
const visibilityRanges = {25:'Nada', 50:'Casi nada', 100:'Poquisima', 500:'Muy poca',1000:'Pocae',2000:'Escasa', 4000:'Mala',10000:'Moderada',20000:'Buena',50000:'Muy buena',99999:'Excelente'}
const radiationUVRanges = {2:'Baja', 5:'Moderada', 7:'Alta', 10:'Muy alta',999:'Extrema'}

const getWindText = (value) => Object.entries(windRanges).find(k => k[0]>=value)[1] || 'Extremo'
const getVisibilityText = (value) => Object.entries(visibilityRanges).find(k => k[0]>=value*1000)[1] || 'Excelente visibilidad'
const getRadiationUVText = (value) => Object.entries(radiationUVRanges).find(k => k[0]>=value)[1] || 'Extrema'

const epochToDay = (epoch) => new Date(epoch*1000).getDate()
const epochToHour = (epoch) => new Date(epoch*1000).getHours()

const indexToDay = (index) => ['Hoy','Mañana','Pasado'][index]

const remap = (x, in_min, in_max, out_min, out_max) => (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;


export {getWindText, getVisibilityText, getRadiationUVText, epochToDay, epochToHour, indexToDay, remap};