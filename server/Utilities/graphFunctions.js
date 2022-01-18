async function insert (data, cur_loc, client, session) {
    await session.run("Match (n) detach delete n")

    await session.run(`Create (n:Company {name: 'Enterprice'}) return n;`)

    for(let i = 0; i < data.length; i+=1){
        const res = await client.query(`SELECT AVG(ST_Distance(geom, ST_GeomFromText('POINT(${cur_loc.lng} ${cur_loc.lat})', 26918))) FROM entities as e WHERE e.name = '${data[i].name}';`)
        
        await session.run(`Match (c:Company) where c.name='Enterprice'
                           Create (n:Employee {name: '${data[i].name}', district: '${data[i].district}', pin_code: '${data[i].pin}'})-[r:Works_At {distance: ${res.rows[0].avg}}]->(c);`)
    }

}

async function count(dist, session){
    const res = await session.run(`Match (n:Employee)-[r]->() where r.distance < ${dist} return count(r) as count`)
    console.log(res)
    // return res.record[0].count;
}

module.exports = {
    insert,
    count
}
