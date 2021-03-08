#include <bits/stdc++.h>

using namespace std;
const int maxn = 110;
int C[maxn][maxn]; // c[i][j] cost of covering i-th - j-th point using 1 station
// c[i][i] = 0 for all i
// c[i][i+1] = a[i+1]-a[i]
// c[i][j] = a[j] - a[i] + C[i+1][j-1]
int dp[maxn][maxn];
// dp[1][1] = 0
// dp[k][i] = dp[k - 1][i - j] + C[i - j + 1]

int main() {
  ios::sync_with_stdio(false); cin.tie(0);
  int K, n;
  cin >> K >> n;
  vector<int> a(n);
  for (int i = 0; i < n; i++) cin >> a[i];
  sort(a.begin(), a.end());
  for (int k = 1; k < n; k++) {
    for (int i = 0; i + k < n; i++) {
      int j = k + i;
      C[i][j] = C[i+1][j-1] + a[j] - a[i];
    }
  }

  memset(dp, 0x3f3f3f3f, sizeof dp);
  for (int i = 0; i < n; i++) {
    dp[1][i] = C[0][i];
  }

  for (int k = 2; k <= K; k++) {
    dp[k][0] = 0;
    for (int i = 1; i < n; i++) {
      for (int j = 1; i - j >= 0; j++) {
        dp[k][i] = min(dp[k][i], dp[k-1][i - j] + C[i - j + 1][i]);
      }
    }
  }
  cout << dp[K][n - 1] << endl;
  return 0;
}
