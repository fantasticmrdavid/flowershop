import flowerShop from './flowerShop';

test('10 Roses => 1 x 10', () => {
  let result = flowerShop('R12', 10);
  console.log(result);
  expect(result).toBe("10 R12 $12.99\n1 x 10 $12.99");
});

test('25 Roses => 2 x 10, 1 x 5', () => {
  let result = flowerShop('R12', 25);
  console.log(result);
  expect(result).toBe("25 R12 $32.97\n2 x 10 $12.99\n1 x 5 $6.99");
});

test('15 Lillies => 1 x 9, 1 x 6', () => {
  let result = flowerShop('L09', 15);
  console.log(result);
  expect(result).toBe("15 L09 $41.90\n1 x 9 $24.95\n1 x 6 $16.95");
});

test('42 Lillies => 4 x 9, 1 x 6', () => {
  let result = flowerShop('L09', 42);
  console.log(result);
  expect(result).toBe("42 L09 $116.75\n4 x 9 $24.95\n1 x 6 $16.95");
});

test('13 Tulips => 2 x 5, 1 x 3', () => {
  let result = flowerShop('T58', 13);
  console.log(result);
  expect(result).toBe("13 T58 $25.85\n2 x 5 $9.95\n1 x 3 $5.95");
});

test('53 Tulips => 5 x 9, 1 x 5, 1 x 3', () => {
  let result = flowerShop('T58', 53);
  console.log(result);
  expect(result).toBe("53 T58 $100.85\n5 x 9 $16.99\n1 x 5 $9.95\n1 x 3 $5.95");
});
