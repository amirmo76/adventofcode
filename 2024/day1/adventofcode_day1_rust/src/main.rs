use std::fs;
use std::time::Instant;

fn _bubble_sort(v: &mut [i32]) {
    for j in 0..v.len() - 1 {
        for i in 0..(v.len() - 1 - j) {
            if v[i] > v[i + 1] {
                v.swap(i, i + 1);
            }
        }
    }
}

fn main() {
    let start = Instant::now();
    let mut v1: Vec<i32> = Vec::with_capacity(1000);
    let mut v2: Vec<i32> = Vec::with_capacity(1000);

    let content = fs::read_to_string("src/input.txt").expect("Could not open the file");

    // I will read the lines into the vectors.
    for line in content.lines() {
        let numbers: Vec<&str> = line.split_whitespace().collect();
        let num = match numbers[0].parse::<i32>() {
            Ok(num) => num,
            Err(e) => panic!("{e}"),
        };
        v1.push(num);

        let num = match numbers[1].parse::<i32>() {
            Ok(num) => num,
            Err(e) => panic!("{e}"),
        };
        v2.push(num);
    }

    // Now I have to sort the vectors.
    // bubble_sort(&mut v1);
    // bubble_sort(&mut v2);
    v1.sort();
    v2.sort();

    // Calculate the distance
    let mut distance = 0;
    if v1.len() == v2.len() {
        for i in 0..v1.len() {
            let dis = v2[i] - v1[i];
            distance += dis.abs();
        }
    }

    // let distance: i32 = v1.iter().zip(v2.iter()).map(|(&a, &b)| (b - a).abs()).sum();

    let duration = start.elapsed();

    println!("{duration:?}");
    println!("{distance}");
}
