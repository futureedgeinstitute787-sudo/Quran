const juzBounds=[["Juz 1",2],["Juz 2",21],["Juz 3",39],["Juz 4",57],["Juz 5",75],["Juz 6",93],["Juz 7",111],["Juz 8",129],["Juz 9",147],["Juz 10",165],["Juz 11",183],["Juz 12",201],["Juz 13",219],["Juz 14",237],["Juz 15",255],["Juz 16",273],["Juz 17",291],["Juz 18",309],["Juz 19",327],["Juz 20",345],["Juz 21",363],["Juz 22",381],["Juz 23",399],["Juz 24",417],["Juz 25",435],["Juz 26",453],["Juz 27",471],["Juz 28",489],["Juz 29",509],["Juz 30",529]];
const TOTAL_PAGES=555;
function juzForPage(p){
  let cur=juzBounds[0][0];
  for(const [name,start] of juzBounds){ if(p>=start) cur=name; else break; }
  if(p===1) return "Cover";
  if(p>=551) return "Tajwid & Index";
  return cur;
}
